import React from "react";

export default function HomePage({ products }) {
  return (
    <div className="home">
      <h1>Shop</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {/* Plain anchor — full page navigation, server renders the next page.
                No client router; each click is a fresh SSR request. */}
            <a href={`/product/${p.id}`}>
              {p.title} — ${(p.price / 100).toFixed(2)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}