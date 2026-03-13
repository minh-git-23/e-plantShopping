import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ setShowCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalPlants = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
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
          <button
            onClick={() => setShowCart(false)}
            style={{
              color: "white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Plants
          </button>
          <span>Cart ({calculateTotalPlants()})</span>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        <h2>Total Number of Plants: {calculateTotalPlants()}</h2>
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

        {cartItems.map((item) => (
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
              <p>Total Cost: ${item.price * item.quantity}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDecrease(item)}>-</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
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
            onClick={() => setShowCart(false)}
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
