import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>
              Discover a wide variety of beautiful houseplants to brighten your
              home and improve your lifestyle.
            </p>
            <button
              className="get-started-btn"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
