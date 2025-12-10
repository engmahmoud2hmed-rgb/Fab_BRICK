// src/pages/BoxDetail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BoxDetail.css";

import { useDispatch } from "react-redux";
import { addItem, openCart } from "../store/cartSlice";

import box1a from "../assets/image/box1_front.jpg";
import box1b from "../assets/image/box1_back.jpg";
import box2a from "../assets/image/box2_front.jpg";
import box2b from "../assets/image/box2_back.jpg";

const boxes = {
  "box-terrazzo": {
    id: "box-terrazzo",
    name: "FULL sample BOX_ TERRAZZO",
    price: "€39.00",
    images: [box1a, box1b],
    img: box1a,
  },
  "box-plain": {
    id: "box-plain",
    name: "FULL samples BOX_ PLAIN",
    price: "€39.00",
    images: [box2a, box2b],
    img: box2a,
  },
};

export default function BoxDetail() {
  const { slug } = useParams();
  const box = boxes[slug];
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!box) return <div style={{ padding: 40 }}>Box not found</div>;

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
          id: box.id,
          name: box.name,
          price: box.price,
          img: box.img,
        })
      );
    }
    dispatch(openCart());
  };

  return (
    <section className="box-section">
      {/* photo left */}
      <div className="box-left">
        <div className="box-main-img-wrap">
          <img src={box.images[activeIndex]} alt={box.name} />
        </div>
        <div className="box-thumbs">
          {box.images.map((img, idx) => (
            <button
              key={idx}
              className={`box-thumb-btn ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={img} alt={`${box.name} ${idx + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {/* right: details */}
      <div className="box-right">
        <h1 className="box-title">{box.name}</h1>
        <div className="box-price">{box.price}</div>

        <div className="box-qty-row">
          <span className="box-qty-label">Quantity *</span>
          <div className="box-qty-control">
            <button className="box-qty-btn" onClick={handleDecrement}>-</button>
            <span className="box-qty-value">{quantity}</span>
            <button className="box-qty-btn" onClick={handleIncrement}>+</button>
          </div>
        </div>

        <button
          className="box-add-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <div className="box-divider" />

        <h2 className="box-subtitle">Details</h2>
        <ul className="box-list">
          <li>9 wall cladding bricks mounted on a backing.</li>
          <li>The technical datasheet (French and English).</li>
          <li>The presentation brochure of our cladding material.</li>
        </ul>

        <div className="box-divider" />

        <h2 className="box-subtitle">Lead Time & Delivery</h2>
        <p className="box-text">
          Receive your sample box without extra packaging, directly at your home
          within 10 days after your order is validated by our team.
        </p>
      </div>
    </section>
  );
}
