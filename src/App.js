function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1>Welcome to DIfinearts</h1>
        <p>Fine art, curated for your corporate spaces.</p>
        <button>View Catalog</button>
      </div>

      {/* About Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2>About Us</h2>
        <p>
          We connect businesses with beautiful, rotating artwork from talented artists.
          Art is rented for a year, then refreshed — keeping your space dynamic and inspiring.
        </p>
      </div>

      {/* Catalog Placeholder */}
      <div>
        <h2>Our Catalog</h2>
        <p>Catalog coming soon...</p>
      </div>
    </div>
  );
}

export default App;
