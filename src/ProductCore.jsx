export default function ProductCore({product}) {

  return (
    <div className="product-core">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="400" />
      <p className="price">${(product.price / 100).toFixed(2)}</p>
      <p className="description">{product.description}</p>
    </div>
  )
}