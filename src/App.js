import React from "react";

// Load Playfair Display in your public/index.html or add it via npm/fontsource if possible
// For quick demo, add this in public/index.html head:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://raw.githubusercontent.com/cyberbully666/difinearts/main/logo.jpg"
          alt="DIfinearts Logo"
          style={{ height: 60, maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#" style={styles.navLink}>Home</a></li>
        <li><a href="#" style={styles.navLink}>About</a></li>
        <li><a href="#" style={styles.navLink}>Catalog</a></li>
        <li><a href="#" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Fine Art Rentals for Corporate Spaces</h1>
        <p style={styles.heroSubtitle}>
          Curated artworks from top artists to transform your workspace.
        </p>
        <button style={styles.ctaButton}>Browse Catalog</button>
      </div>
    </section>
  );
}

function FeaturedWorks() {
  const artworks = [
    { title: "Blue Dusk", artist: "Ishar K.", img: "https://via.placeholder.com/400x300?text=Blue+Dusk" },
    { title: "Industrial Grace", artist: "Dishank M.", img: "https://via.placeholder.com/400x300?text=Industrial+Grace" },
    { title: "Muted Light", artist: "Tanya B.", img: "https://via.placeholder.com/400x300?text=Muted+Light" }
  ];

  return (
    <section style={styles.featuredSection}>
      <h2 style={styles.featuredTitle}>Featured Works</h2>
      <div style={styles.featuredGrid}>
        {artworks.map((art, index) => (
          <div key={index} style={styles.artworkCard}>
            <img src={art.img} alt={art.title} style={styles.artworkImage} />
            <p style={styles.artworkTitle}>{art.title}</p>
            <p style={styles.artworkArtist}>{art.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>© 2025 DIfinearts. All rights reserved.</p>
      <div style={styles.footerLinks}>
        <a href="#" style={styles.footerLink}>Contact</a>
        <a href="#" style={styles.footerLink}>Instagram</a>
        <a href="#" style={styles.footerLink}>LinkedIn</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedWorks />
      <Footer />
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#555",
    fontWeight: "600",
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    transition: "color 0.3s",
  },

  hero: {
    position: "relative",
    height: "80vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  heroContent: {
    position: "relative",
    maxWidth: "700px",
    textAlign: "center",
    padding: "0 20px",
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "3.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    marginBottom: "40px",
    fontWeight: "400",
  },
  ctaButton: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "14px 36px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "700",
    letterSpacing: "1px",
    transition: "background-color 0.3s",
  },

  featuredSection: {
    padding: "80px 40px",
    backgroundColor: "#fff",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  featuredTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "50px",
    fontFamily: "'Playfair Display', serif",
    textAlign: "center",
    color: "#222",
  },
  featuredGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
  },
  artworkCard: {
    textAlign: "center",
    cursor: "pointer",
  },
  artworkImage: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  artworkTitle: {
    marginTop: "15px",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#222",
  },
  artworkArtist: {
    fontSize: "0.9rem",
    color: "#666",
    marginTop: "4px",
  },

  footer: {
    backgroundColor: "#222",
    color: "#eee",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  footerLinks: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  footerLink: {
    color: "#eee",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    transition: "color 0.3s",
  },
};

export default App;
