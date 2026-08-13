import { useState } from "react";

export default function ProductActions({ productId, price }) {
  const [qty, setQty] = useState(0);
  const [added, setAdded] = useState(false);

  const total = ((price * qty) / 100).toFixed(2);

  return (
    <div className="product-actions">
      <div className="qty">
        <button onClick={() => setQty((q) => Math.max(0, q - 1))}>−</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>
      <button
        onClick={() => {
          setAdded(true);
          console.log(`Added ${qty} of product ${productId} to cart`);
        }}
      >
        {added ? `Added ${qty}!` : `Add to Cart — $${total}`}
      </button>
    </div>
  );
}