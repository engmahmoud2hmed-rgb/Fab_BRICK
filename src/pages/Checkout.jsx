import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate Payment Processing
        alert("Payment Successful! Your order has been placed.");
        dispatch(clearCart());
        navigate('/');
    };

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} className="underline">Go to Shop</button>
            </div>
        );
    }

    return (
        <div className="w-full pt-20 pb-16 px-4 flex flex-col md:flex-row justify-center gap-12">
            {/* Order Summary */}
            <div className="w-full md:w-1/3 order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="flex flex-col gap-4 border-t pt-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="font-semibold">${item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>

            {/* Checkout Form */}
            <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Details & Payment</h2>
                <form onSubmit={handlePayment} className="flex flex-col gap-4">
                    <input
                        name="fullName"
                        placeholder="Full Name"
                        className="p-3 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="address"
                        placeholder="Address"
                        className="p-3 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            name="city"
                            placeholder="City"
                            className="p-3 border rounded w-1/2"
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="postalCode"
                            placeholder="Postal Code"
                            className="p-3 border rounded w-1/2"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <h3 className="font-semibold mt-4">Payment Method (Simulated)</h3>
                    <input
                        name="cardNumber"
                        placeholder="Card Number"
                        className="p-3 border rounded"
                        maxLength={16}
                        onChange={handleChange}
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            name="expiry"
                            placeholder="MM/YY"
                            className="p-3 border rounded w-1/2"
                            maxLength={5}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="cvc"
                            placeholder="CVC"
                            className="p-3 border rounded w-1/2"
                            maxLength={3}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 mt-4 rounded font-bold hover:bg-gray-800 transition-colors"
                    >
                        Pay ${total}
                    </button>
                </form>
            </div>
        </div>
    );
}
