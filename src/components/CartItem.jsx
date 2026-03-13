import React, { useState } from "react";

function CartItem() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 18,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5d46"
    }
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const getTotalPlants = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#2e7d32",
          color: "white",
          padding: "15px 30px"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>
          Paradise Nursery
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Plants
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Cart ({getTotalPlants()})
          </a>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        <h2>Total Plants: {getTotalPlants()}</h2>
        <h2>Total Cart Cost: ${getTotalCost()}</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.price * item.quantity}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <button
            onClick={() => alert("Coming Soon")}
            style={{
              padding: "12px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Checkout
          </button>

          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "#555",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;