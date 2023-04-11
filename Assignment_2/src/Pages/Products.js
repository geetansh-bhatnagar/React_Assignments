import { useState, useEffect } from "react";
import "./Product.css";
function Products() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(savedCartItems);

        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Increment the quantity if the product is already in the cart
            const updatedCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Add the product to the cart with a quantity of 1
            const newCartItem = { id: product.id, name: product.name, price: product.price, quantity: 1 };
            setCartItems([...cartItems, newCartItem]);
        }
    };

    // Save cart items to local storage whenever the cart items state changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <div className="productcontainer">
        <h1 id="heading">Our Products</h1>
        <div className="product-list">

            {products.map((product,index) => (
                <div className="product" key={index}>
                    <h1 id="pheading">{product.name}</h1>
                    <img id="img" src={product.image} alt={product.name} />
                    <h2>{product.description}</h2>
                    <h2>{product.price} Rs</h2>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}


        </div>
        </div>
    );
}

export default Products;