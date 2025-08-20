// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ09LKil-hwcj03XpehrnG5ldpUzlE3JM",
  authDomain: "lineup-f1.firebaseapp.com",
  projectId: "lineup-f1",
  storageBucket: "lineup-f1.firebasestorage.app",
  messagingSenderId: "550687608005",
  appId: "1:550687608005:web:1b97104d97be2bf0d334ac",
  measurementId: "G-BSR68M89W6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
