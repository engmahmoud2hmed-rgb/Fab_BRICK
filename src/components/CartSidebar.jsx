// src/components/CartSidebar.jsx
import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeItem, clearCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, items } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      {/* الهيدر */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">
          Cart <span className="text-sm font-normal">({items.length} items)</span>
        </h2>
        <button
          className="text-2xl leading-none"
          onClick={() => dispatch(closeCart())}
        >
          ×
        </button>
      </div>

      {/* المحتوى */}
      <div className="p-6 overflow-y-auto h-[calc(100%-72px-120px)]">
        {items.length === 0 ? (
          <p className="text-center text-sm text-gray-500 mt-20">
            Your cart is empty.
          </p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 border-b pb-3"
              >
                <div className="flex items-start gap-3">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-sm text-gray-700 font-semibold mt-1">
                      ${item.price}
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-600">Quantity:</span>
                  <div className="flex items-center gap-2 border rounded">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 min-w-[40px] text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-semibold ml-auto">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* الفوتر */}
      {items.length > 0 && (
        <div className="px-6 py-4 border-t">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-xs text-gray-500 underline hover:text-gray-700"
            >
              Clear cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
