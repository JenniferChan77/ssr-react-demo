// Pretend we have 7 reviews.
const allReviews = Array.from({ length: 7 }, (_, i) => ({
  id: `r${i + 1}`,
  author: `Customer ${i + 1}`,
  rating: ((i % 5) + 1),
  text: `Review number ${i + 1}. Really happy with this purchase.`,
}));

// cursor = how many we've already sent. Returns a page + the next cursor.
export async function getReviews(cursor = 0, limit = 3) {
  const start = Number(cursor) || 0;
  const page = allReviews.slice(start, start + limit);
  const nextCursor = start + limit;
  const hasMore = nextCursor < allReviews.length;

  return {
    reviews: page,
    nextCursor: hasMore ? nextCursor : null, // null = no more pages
  };
}