import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#f5f6fa",
        color: "#2c3e50",            // ✅ FIX: dark text
        height: "100vh",
        paddingTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        403 - Unauthorized
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        You don’t have permission to access this page.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => navigate(`/${role || ""}`, { replace: true })}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⬅ Go Home
        </button>

        <button
          onClick={() => navigate("/login", { replace: true })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🔐 Go to Login
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;