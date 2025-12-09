// src/components/CartSidebar.jsx
import { useSelector, useDispatch } from "react-redux";
import { closeCart, removeItem, clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, items } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };

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
      <div className="p-6 overflow-y-auto h-[calc(100%-72px-64px)]">
        {items.length === 0 ? (
          <p className="text-center text-sm text-gray-500 mt-20">
            Your cart is empty.
          </p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover"
                    />
                  )}
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      {item.quantity} × {item.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* الفوتر */}
      {items.length > 0 && (
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <button
            onClick={() => dispatch(clearCart())}
            className="text-xs text-gray-500 underline"
          >
            Clear cart
          </button>
          <button
            onClick={handleCheckout}
            className="bg-black text-white text-sm px-6 py-2 rounded-full"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
