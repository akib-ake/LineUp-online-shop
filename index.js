// JavaScript code for LineUp Online Shop
// This code handles product rendering, cart functionality, and dark mode toggle
        // Sample product data
        const products = [
            {
                id: 1,
                name: "Classic White T-Shirt",
                price: 24.99,
                image: "https://via.placeholder.com/300x400/ffffff/000000?text=White+T-Shirt",
                rating: 4.5,
                category: "featured"
            },
            {
                id: 2,
                name: "Slim Fit Jeans",
                price: 49.99,
                image: "https://via.placeholder.com/300x400/0000ff/ffffff?text=Slim+Jeans",
                rating: 4.2,
                category: "featured"
            },
            {
                id: 3,
                name: "Leather Jacket",
                price: 129.99,
                image: "https://via.placeholder.com/300x400/8b4513/ffffff?text=Leather+Jacket",
                rating: 4.8,
                category: "bestseller"
            },
            {
                id: 4,
                name: "Running Shoes",
                price: 89.99,
                image: "https://via.placeholder.com/300x400/ff0000/ffffff?text=Running+Shoes",
                rating: 4.6,
                category: "bestseller"
            },
            {
                id: 5,
                name: "Summer Dress",
                price: 59.99,
                image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Summer+Dress",
                rating: 4.3,
                category: "newarrival"
            },
            {
                id: 6,
                name: "Baseball Cap",
                price: 24.99,
                image: "https://via.placeholder.com/300x400/000000/ffffff?text=Baseball+Cap",
                rating: 4.1,
                category: "newarrival"
            },
            {
                id: 7,
                name: "Smart Watch",
                price: 199.99,
                image: "https://via.placeholder.com/300x400/333333/ffffff?text=Smart+Watch",
                rating: 4.7,
                category: "featured"
            },
            {
                id: 8,
                name: "Backpack",
                price: 79.99,
                image: "https://via.placeholder.com/300x400/808080/ffffff?text=Backpack",
                rating: 4.4,
                category: "bestseller"
            }
        ];

        // Function to generate star rating HTML
        function generateStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 0; i < fullStars; i++) {
                stars += '★';
            }
            
            if (hasHalfStar) {
                stars += '½';
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                stars += '☆';
            }
            
            return stars;
        }

        // Function to render products
        function renderProducts() {
            const featuredContainer = document.getElementById('featured-products');
            const bestsellerContainer = document.getElementById('bestseller-products');
            const newarrivalContainer = document.getElementById('newarrival-products');
            
            featuredContainer.innerHTML = '';
            bestsellerContainer.innerHTML = '';
            newarrivalContainer.innerHTML = '';
            
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product-card';
                productElement.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-rating">${generateStarRating(product.rating)}</div>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                
                if (product.category === 'featured') {
                    featuredContainer.appendChild(productElement);
                } else if (product.category === 'bestseller') {
                    bestsellerContainer.appendChild(productElement);
                } else if (product.category === 'newarrival') {
                    newarrivalContainer.appendChild(productElement);
                }
            });
            
            // Add event listeners to Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Cart functionality
        let cart = [];
        
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartCount();
                
                // Show added to cart feedback
                const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
                const originalText = button.textContent;
                button.textContent = "Added!";
                button.style.backgroundColor = "#28a745";
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = "";
                }, 1500);
            }
        }
        
        function updateCartCount() {
            document.getElementById('cart-count').textContent = cart.length;
        }

        // Dark mode functionality
        document.getElementById('theme-toggle-btn').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Save theme preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button text
            this.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            document.getElementById('theme-toggle-btn').textContent = 'Toggle Light Mode';
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCartCount();
        });
    