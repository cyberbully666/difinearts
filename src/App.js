import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://raw.githubusercontent.com/cyberbully666/difinearts/refs/heads/main/logo.jpg"
          alt="DIfinearts Logo"
          style={{ height: 100, maxWidth: "100%", objectFit: "contain", marginRight: 16 }}
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
      <h1 style={styles.heroTitle}>Fine Art Rentals for Corporate Spaces</h1>
      <p style={styles.heroSubtitle}>
        Curated artworks from top artists to transform your workspace.
      </p>
      <button style={styles.ctaButton}>Browse Catalog</button>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #ddd",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#222",
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
    fontWeight: "500",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  hero: {
    padding: "120px 40px",
    textAlign: "center",
    backgroundColor: "#fafafa",
    minHeight: "70vh",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#222",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#555",
    marginBottom: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ctaButton: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
};

export default App;
