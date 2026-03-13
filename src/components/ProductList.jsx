import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 18,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5d46"
    },
    {
      id: 3,
      name: "Spider Plant",
      price: 12,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
      id: 4,
      name: "Rubber Plant",
      price: 20,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 10,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      id: 6,
      name: "ZZ Plant",
      price: 22,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
    },
    {
      id: 7,
      name: "Echeveria",
      price: 8,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
    },
    {
      id: 8,
      name: "Jade Plant",
      price: 14,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d"
    },
    {
      id: 9,
      name: "Haworthia",
      price: 9,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
    },
    {
      id: 10,
      name: "Burro’s Tail",
      price: 11,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
    },
    {
      id: 11,
      name: "Panda Plant",
      price: 13,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8"
    },
    {
      id: 12,
      name: "Crown of Thorns",
      price: 16,
      category: "Succulents",
      image: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed"
    },
    {
      id: 13,
      name: "Boston Fern",
      price: 17,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7"
    },
    {
      id: 14,
      name: "Areca Palm",
      price: 25,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 15,
      name: "Chinese Evergreen",
      price: 19,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
    },
    {
      id: 16,
      name: "Dracaena",
      price: 21,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f"
    },
    {
      id: 17,
      name: "English Ivy",
      price: 14,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa"
    },
    {
      id: 18,
      name: "Parlor Palm",
      price: 23,
      category: "Air Purifying Plants",
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514"
    }
  ];

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Air Purifying Plants"
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const getCartCount = () => {
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
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Plants
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Cart ({getCartCount()})
          </a>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "40px" }}>
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px"
              }}
            >
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center"
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems.includes(plant.id)}
                      style={{
                        padding: "10px 15px",
                        backgroundColor: addedItems.includes(plant.id)
                          ? "gray"
                          : "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: addedItems.includes(plant.id)
                          ? "not-allowed"
                          : "pointer"
                      }}
                    >
                      {addedItems.includes(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
