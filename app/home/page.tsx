import styles from "./home.module.css";
export default function Home() {
  const products = [
    {
      id: 1,
      title: "Chocolate Dream Cake",
      price: 45,
      category: "CAKES",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
      id: 2,
      title: "Strawberry Donut",
      price: 12,
      category: "DONUTS",
      rating: 4.5,
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "Vanilla Cupcake",
      price: 8,
      category: "CAKES",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9"
    },
    {
      id: 4,
      title: "Chocolate Dream Cake",
      price: 45,
      category: "CAKES",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
  ];

  return (
    <main>
      <div className="navbar">
        <h1 className="title">Bake'n Cake</h1>

        <div className="menu-center">
          <p className="navbar-content">Home</p>
          <p className="navbar-content">Products</p>
          <p className="navbar-content">About</p>
          <p className="navbar-content">Contact</p>
        </div>

        <div className="cart-icon">
          🛒
        </div>
      </div>


      <div className="intro-card">
        <div className="intro-text-container">
          <p className="intro-label">PREMIUM BAKERY</p>

          <h2 className="intro-heading1">Handcrafted</h2>
          <h2 className="intro-heading2">Desserts</h2>

          <p className="intro-paragraph">
            Experience the finest Bake 'n cakes, donuts, and pastries made
            fresh daily with premium ingredients and passion.
          </p>

          <div className="buttons-container">
            <button className="shop-button">Shop Now →</button>
            <button className="learn-button">Learn More</button>
          </div>
        </div>

        <img
          className="intro-image"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/beautiful-artisan-cakes-and-donuts-display-qs33NdopTmZPcqSkevUB9CJnOdZh9p.jpg"
          alt="Bakery display"
        />
      </div>
      <div className="collection-container">

        <p className="collection-heading1">Our Collection</p>
        <p className="collection-heading2">Bake'n Cake Selections </p>
        <p className="collection-paragraph">Curated selection of our most beloved cakes, donuts, and pastries </p>
      </div>
      <div className="catogery-alignment">
        <div className="catogery-selection">
          <p className="catogery-text">All</p>
        </div>
        <div className="catogery-nonSelected">
          <p className="catogery-text-not-selected">Cakes</p>
        </div>
        <div className="catogery-nonSelected">
          <p className="catogery-text-not-selected">Donuts</p>
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} className="product-image" />
              <div className="favorite-icon">🤍</div>
            </div>

            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3 className="product-title">{product.title}</h3>

              <div className="product-rating">
                ⭐⭐⭐⭐☆
                <span className="rating-number">{product.rating}</span>
              </div>

              <div className="product-bottom">
                <p className="product-price">${product.price}</p>
                <div className="cart-btn">🛒</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="details">
        <h2 className="details-h1"> Why Choose Bake'n Cake</h2>
        <h2 className="details-h2"> We're committed to delivering exceptional quality and experience</h2>

        <div className="detail-grid">
          <div className="details-card">
            <div className="details-item">
              <div className="details-icon">
                🚚
              </div>

              <h3 className="details-title">Fast Delivery</h3>

              <p className="details-text">
                Fresh delivery within 24 hours to your doorstep
              </p>
            </div>
          </div>


          <div className="details-card">
            <div className="details-item">
              <div className="details-icon">
                🚚
              </div>

              <h3 className="details-title">Premium Ingrediants</h3>

              <p className="details-text">
                Made with high-quality, natural ingredients
              </p>
            </div>
          </div>
          <div className="details-card">
            <div className="details-item">
              <div className="details-icon">
                🚚
              </div>

              <h3 className="details-title">Made to Order</h3>

              <p className="details-text">
                Made with high-quality, natural ingredients
              </p>
            </div>
          </div>
          <div className="details-card">
            <div className="details-item">
              <div className="details-icon">
                🚚
              </div>

              <h3 className="details-title">Award Winning</h3>

              <p className="details-text">
                Made with high-quality, natural ingredients
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              🍰
            </div>
            <h2 className="footer-title">Bake'n Cake</h2>
            <p className="footer-desc">
              Crafting exceptional desserts with passion and premium ingredients
              since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <p>Shop</p>
            <p>About Us</p>
            <p>Custom Orders</p>
            <p>Blog</p>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3>Support</h3>
            <p>Contact</p>
            <p>FAQ</p>
            <p>Shipping Info</p>
            <p>Returns</p>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>📞 +1 (234) 567-890</p>
            <p>✉️ hello@BakenCake.com</p>
            <p>📍 123 Baker St, Culinary City, CC 12345</p>
          </div>

        </div>
        <div className="footer-social">
          <span>📷</span>
          <span>f</span>
          <span>🐦</span>
        </div>

        <div className="footer-divider"></div>
        <p className="footer-bottom">
          © 2025 Bake 'n Cake Bakery. All rights reserved. Crafted with ❤️
        </p>
      </footer>

    </main>
  );
}
