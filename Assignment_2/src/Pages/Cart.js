import React, { useState, useEffect } from "react";
import './Cart.css';
import {Link} from "react-router-dom";
function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleDecrement = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCart(newCart);

            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    };
    // const handleBuyNow = () => {
    //
    //     window.location.href = "./Pages/Checkout.js";
    // };
    const subTotal = (item) => {
        return item.price * item.quantity;
    };

    const total = cart.reduce((acc, item) => {
        return acc + subTotal(item);
    }, 0);

    return (
        <div className="cart-page">
            <h1>Cart</h1>
            {cart.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>Rs{item.price}</td>
                            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button style={{
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: 'red',
                                    color: '#fff',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    margin: '0 10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} onClick={() => handleDecrement(index)}>-</button>
                                {item.quantity}
                                <button style={{
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: 'red',
                                    color: '#fff',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    border: 'none',
                                    cursor: 'pointer',
                                    margin: '0 10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} onClick={() => handleIncrement(index)}>+</button>
                            </td>


                            <td>Rs{subTotal(item)}</td>
                            <td>
                                <button onClick={() => handleRemoveItem(index)}
                                    style={{
                                        backgroundColor: '#f44336',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}
                                >
                                   X
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3"></td>
                        <td>Total:</td>
                        <td>Rs{total}</td>
                    </tr>
                    </tbody>
                </table>


            ) : (

                <p>Wushh!! Your Cart seems Empty</p>

            )}

            {
                cart.length > 0 ? (
                    <Link to="/Checkout" className="btn">Buy All</Link>
                ):<>
                    {/* nothing will be rendered here */}
                </>
            }


        </div>
    );
}

export default CartPage;
