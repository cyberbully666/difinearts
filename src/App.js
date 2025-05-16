import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://raw.githubusercontent.com/cyberbully666/difinearts/main/logo.jpg"
          alt="DIfinearts Logo"
          style={{ height: 100, objectFit: "contain", marginRight: 16 }}
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

function FeaturedArtworks() {
  const artworks = [
    {
      title: "Abstract Colors",
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM5M2NkZjAiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjcwIiBmaWxsPSIjZmZjMzM2Ii8+Cjwvc3ZnPg=="
    },
    {
      title: "Classic Painting",
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM3YjYzZmYiLz4KICA8bGluZSB4MT0iMTAwIiB5MT0iNTAiIHgyPSI1MDAiIHkyPSIzNDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyMCIvPgo8L3N2Zz4="
    },
    {
      title: "Modern Art",
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiM3ZmY3YmYiLz4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSIyMDAiIHI9Ijc1IiBmaWxsPSIjZmYzMzM2Ii8+Cjwvc3ZnPg=="
    },
  ];

  return (
    <section style={styles.featuredSection}>
      <h2 style={styles.featuredTitle}>Featured Artworks</h2>
      <div style={styles.artworkGrid}>
        {artworks.map((art, idx) => (
          <div key={idx} style={styles.artworkCard}>
            <img src={art.img} alt={art.title} style={styles.artworkImage} />
            <h3 style={styles.artworkTitle}>{art.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}





function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedArtworks />
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderBottom: "1px solid #ddd",
    fontFamily: "'Playfair Display', serif",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
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
    position: "relative",
    height: "70vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "'Playfair Display', serif",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 34, 34, 0.6)",
  },
  heroContent: {
    position: "relative",
    textAlign: "center",
    maxWidth: "700px",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    marginBottom: "40px",
    textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
  },
  ctaButton: {
    backgroundColor: "#fff",
    color: "#222",
    padding: "14px 40px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "1.125rem",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },

  featuredSection: {
    padding: "60px 40px",
    fontFamily: "'Playfair Display', serif",
    backgroundColor: "#fafafa",
    textAlign: "center",
  },
  featuredTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#222",
  },
  artworkGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  artworkCard: {
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "300px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  artworkImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  artworkTitle: {
    padding: "16px",
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#333",
  },
};

export default App;
