const products = {
  "1": {
    id: "1",
    title: "Classic Wool Coat",
    image: "https://media.vogue.co.uk/photos/68e42a54c59be9e0702f8cea/2:3/w_2240,c_limit/GettyImages-2237594741.jpg",
    price: 18900, // store money in cents — avoids float bugs
    description:
      "A timeless wool coat cut for everyday wear. Warm, structured, and built to last.",
  },
  "2": {
    id: "2",
    title: "Linen Summer Shirt",
    image: "https://media.vogue.co.uk/photos/68e42a54c59be9e0702f8cea/2:3/w_2240,c_limit/GettyImages-2237594741.jpg",
    price: 6500,
    description:
      "Breathable linen shirt with a relaxed fit. Made for warm afternoons.",
  },
};

// Simulate an async DB call — real apps await a query here.
export async function getProduct(id) {
  return products[id] || null;
}

export async function getAllProducts() {
  return Object.values(products);
}