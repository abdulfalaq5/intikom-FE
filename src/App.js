import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { FaStore, FaFilter } from "react-icons/fa";

const productsData = [
  { name: "Laptop Gaming", price: 1200, description: "High-performance gaming laptop" },
  { name: "Smartphone Pro", price: 800, description: "Latest smartphone with advanced features" },
  { name: "Tablet Ultra", price: 600, description: "Premium tablet for work and entertainment" },
  { name: "Smart Watch", price: 300, description: "Fitness tracking smartwatch" },
  { name: "Wireless Earbuds", price: 150, description: "Noise-cancelling wireless earbuds" },
  { name: "Smart TV", price: 900, description: "4K Smart TV with streaming capabilities" },
];

const priceRanges = [
  { label: "Semua", min: 0, max: Infinity },
  { label: "Under $200", min: 0, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: Infinity },
];

function App() {
  const [products, setProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [notification, setNotification] = useState({ show: false, message: "" });

  useEffect(() => {
    const filteredProducts = productsData.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const priceRange = priceRanges[selectedPriceRange];
      const matchesPrice = 
        product.price >= priceRange.min && 
        product.price <= priceRange.max;

      return matchesSearch && matchesPrice;
    });
    setProducts(filteredProducts);
  }, [searchQuery, selectedPriceRange]);

  const handleAddToCart = (product) => {
    setNotification({
      show: true,
      message: `${product.name} berhasil ditambahkan ke keranjang!`
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "" });
    }, 3000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "20px",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
          gap: "12px",
        }}>
          <FaStore style={{
            fontSize: "32px",
            color: "#4CAF50"
          }} />
          <h1 style={{
            margin: 0,
            fontSize: "28px",
            color: "#333",
            fontWeight: "600"
          }}>
            Toko Elektronik
          </h1>
        </div>
        
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}>
          <SearchBar onSearch={setSearchQuery} />
          
          <div style={{
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}>
            <FaFilter style={{ color: "#4CAF50" }} />
            <div style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}>
              {priceRanges.map((range, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPriceRange(index)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: "none",
                    backgroundColor: selectedPriceRange === index ? "#4CAF50" : "#f0f0f0",
                    color: selectedPriceRange === index ? "white" : "#666",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    if (selectedPriceRange !== index) {
                      e.currentTarget.style.backgroundColor = "#e8f5e9";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedPriceRange !== index) {
                      e.currentTarget.style.backgroundColor = "#f0f0f0";
                    }
                  }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>

      {notification.show && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "16px 24px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          animation: "slideIn 0.3s ease-out",
          zIndex: 1000,
        }}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default App;

