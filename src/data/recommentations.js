const recs = [
  { id: "2", title: "Linen Summer Shirt", price: 6500 },
  { id: "3", title: "Cotton Chinos", price: 7200 },
  { id: "4", title: "Leather Belt", price: 3500 },
];

export async function getRecommendations(excludeId) {
  return recs.filter((r) => r.id !== excludeId);
}