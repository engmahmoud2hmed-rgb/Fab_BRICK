// src/pages/Option2Detail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { option2Products } from "../pages/Samples";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../store/cartSlice";

export default function Option2Detail() {
  const { slug } = useParams();
  const product = option2Products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!product) return <div className="p-8">Product not found</div>;

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    // Add the item multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(
        addItem({
          id: slug,
          name: product.name,
          price: product.price,
          img: product.img,
        })
      );
    }
    dispatch(openCart());
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1200px] w-full flex px-12 pt-16 pb-24 gap-16">
        {/* photo */}
        <div className="w-[40%]">
          <img
            src={product.img}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* right column  */}
        <div className="w-[60%] flex flex-col">
          <h1 className="text-xl tracking-[0.15em] font-semibold mb-2">
            {product.name}
          </h1>
          <div className="text-base mb-6">{product.price}</div>

          {/* Quantity controls */}
          <div className="mb-6">
            <div className="text-xs mb-1">Quantity *</div>
            <div className="inline-flex items-center border border-gray-300 text-sm">
              <button className="px-3 py-2 hover:bg-gray-100 transition-colors" onClick={handleDecrement}>−</button>
              <span className="px-8 py-2 border-x border-gray-300 text-center">
                {quantity}
              </span>
              <button className="px-3 py-2 hover:bg-gray-100 transition-colors" onClick={handleIncrement}>+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="w-full max-w-[400px] border border-black rounded-full py-3 text-sm font-medium mb-10 hover:bg-black hover:text-white transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {/* Details */}
          <div className="border-t border-gray-300 pt-6 text-sm leading-relaxed">
            <h2 className="font-semibold mb-3">Details</h2>
            <p className="mb-2">Your sample box contains:</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>The wall cladding brick(s) mounted on a backing</li>
              <li>The technical datasheet</li>
              <li>The presentation brochure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
