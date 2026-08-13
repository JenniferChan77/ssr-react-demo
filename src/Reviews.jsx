import React, { useState, useEffect } from "react";

export default function Reviews({ productId }) {
  const [reviews, setReviews] = useState(null); // null = initial loading
  const [cursor, setCursor] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Reusable fetch for a given cursor.
  function loadPage(c) {
    return fetch(`/api/reviews?cursor=${c}`)
      .then((r) => r.json())
      .then((data) => {
        // Append, don't replace — pagination accumulates.
        setReviews((prev) => (prev ? [...prev, ...data.reviews] : data.reviews));
        setCursor(data.nextCursor ?? c);
        setHasMore(data.nextCursor !== null);
      });
  }

  // Initial load after hydration.
  useEffect(() => {
    loadPage(0);
  }, [productId]);

  function handleLoadMore() {
    setLoadingMore(true);
    loadPage(cursor).finally(() => setLoadingMore(false));
  }

  if (reviews === null) {
    return <div className="reviews skeleton">Loading reviews…</div>;
  }

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((rev) => (
          <li key={rev.id}>
            <strong>{rev.author}</strong> — {"★".repeat(rev.rating)}
            <p>{rev.text}</p>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button onClick={handleLoadMore} disabled={loadingMore}>
          {loadingMore ? "Loading…" : "Load more reviews"}
        </button>
      )}
    </div>
  );
}