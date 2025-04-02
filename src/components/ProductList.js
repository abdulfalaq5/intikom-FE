import { FaShoppingCart } from "react-icons/fa";

function ProductList({ products, onAddToCart }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "24px",
      padding: "20px 0",
    }}>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e8f5e9",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <FaShoppingCart style={{
                  fontSize: "20px",
                  color: "#4CAF50",
                }} />
              </div>
              <h3 style={{
                margin: 0,
                fontSize: "18px",
                color: "#333",
                fontWeight: "600"
              }}>
                {product.name}
              </h3>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "auto",
            }}>
              <span style={{
                fontSize: "20px",
                color: "#4CAF50",
                fontWeight: "bold"
              }}>
                Rp {parseFloat(product.price).toLocaleString('id-ID')}
              </span>
              <button 
                onClick={() => onAddToCart(product)}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#45a049"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}
              >
                <FaShoppingCart style={{ fontSize: "14px" }} />
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div style={{
          gridColumn: "1 / -1",
          textAlign: "center",
          padding: "60px 40px",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          color: "#666",
        }}>
          <FaShoppingCart style={{
            fontSize: "48px",
            color: "#ccc",
            marginBottom: "16px"
          }} />
          <p style={{
            fontSize: "18px",
            margin: 0
          }}>
            Tidak ada produk ditemukan.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductList;
  