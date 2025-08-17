import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FeaturedArtworks from "./FeaturedArtworks";
import Gallery from "./Gallery";

// ✅ Importing images properly
import painting1 from "./assets/artworks/painting1.jpg";
import painting2 from "./assets/artworks/painting2.jpg";
import painting3 from "./assets/artworks/painting3.jpg";

function App() {
  // Hero carousel setup
  const images = [painting1, painting2, painting3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // switch every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="hero" style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <img
          src={images[currentIndex]}
          alt="Artwork"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Welcome to DI FineArts
        </div>
      </section>

      {/* Featured Artworks */}
      <FeaturedArtworks />

      {/* Gallery Section */}
      <Gallery />
    </div>
  );
}

export default App;
