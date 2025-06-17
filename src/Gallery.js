import React from "react";

const artworks = [
  {
    title: "Abstract Blue",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    title: "Color Storm",
    image: "https://picsum.photos/id/1016/600/400",
  },
  {
    title: "Red Composition",
    image: "https://picsum.photos/id/1025/600/400",
  },
];

function Gallery() {
  return (
    <section style={{ padding: "40px", fontFamily: "Playfair Display, serif" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>Gallery</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {artworks.map((art, index) => (
          <div
            key={index}
            style={{
              maxWidth: "300px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            className="hover-card"
          >
            <img
              src={art.image}
              alt={art.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transition: "transform 0.3s ease",
              }}
              className="hover-image"
            />
            <p style={{ marginTop: "12px", fontSize: "1rem" }}>{art.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
