import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [isCheckingOut, setIsCheckingOut] = React.useState(false);

    // Load cart items from localStorage
    React.useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    // Calculate total whenever cartItems changes
    React.useEffect(() => {
        const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotal(cartTotal);
        // Update localStorage whenever cart changes
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
            minimumFractionDigits: 2
        }).format(amount);
    };

    const updateQuantity = (productId, change) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.productId === productId) {
                    const newQuantity = item.quantity + change;
                    // Prevent quantity from going below 1
                    if (newQuantity < 1) return item;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const removeItem = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    };

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            // Add your checkout logic here
            localStorage.removeItem('cart');
            setCartItems([]);
        } catch (error) {
            console.error('Checkout failed:', error);
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                    {cartItems.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                            <p className="text-gray-500 mb-4">Your cart is empty</p>
                            <Link 
                                to="/products" 
                                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                {cartItems.map((item) => (
                                    <div 
                                        key={item.productId} 
                                        className="flex items-center gap-4 p-4 border-b last:border-b-0"
                                    >
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-green-600 font-medium">{formatPrice(item.price)}</p>
                                            
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-2">
                                                <button 
                                                    onClick={() => updateQuantity(item.productId, -1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <FontAwesomeIcon icon={faMinus} className="text-gray-500" />
                                                </button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.productId, 1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <FontAwesomeIcon icon={faPlus} className="text-gray-500" />
                                                </button>
                                                <button 
                                                    onClick={() => removeItem(item.productId)}
                                                    className="ml-4 p-1 hover:bg-red-100 rounded text-red-500"
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">{formatPrice(total)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Delivery Fee</span>
                                    <span className="font-semibold">₱50.00</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">Total:</span>
                                        <span className="text-2xl font-bold text-green-600">
                                            {formatPrice(total + 50)}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-3">
                                    <button
                                        onClick={handleCheckout}
                                        disabled={isCheckingOut}
                                        className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                                    </button>
                                    <Link 
                                        to="/products"
                                        className="block text-center text-green-600 hover:text-green-700"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;