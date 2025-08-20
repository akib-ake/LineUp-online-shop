// Login user
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}

// Register new user
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("message").innerText = "Account created! Please login.";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}

// Logout user
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Protect pages (redirect if not logged in)
auth.onAuthStateChanged(user => {
  if (!user && window.location.pathname !== "/index.html") {
    window.location.href = "index.html";
  }
});
