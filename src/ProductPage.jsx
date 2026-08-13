import React from "react";
import ProductActions from "./ProductActions.jsx";
import ProductCore from "./ProductCore.jsx";
import Reviews from "./Reviews.jsx";
import Recommendations from "./Recommendation.jsx";

export default function ProductPage({product}) {
  const actionProps = {productId: product.id, price: product.price}
  const recsProps = { excludeId: product.id };
  const reviewsProps = { productId: product.id };

  return (
    <div className="product-page">
      <ProductCore product={product} />

      {/* This wrapper is the island boundary.
          - data-hydrate names which component to mount here.
          - Its innerHTML is the server-rendered markup the client will adopt. */}
      <div data-hydrate="ProductActions"
           data-props={JSON.stringify(actionProps)}
      >
        <ProductActions {...actionProps} />
      </div>

      {/* These render as SKELETONS server-side (useEffect doesn't run on server),
          then fetch real data after hydration. */}
      <div data-hydrate="Reviews" data-props={JSON.stringify(reviewsProps)} >
        <Reviews {...reviewsProps}/>
      </div>

      <div data-hydrate="Recommendations" data-props={JSON.stringify(recsProps)}>
        <Recommendations {...recsProps} />
      </div>
    </div>
  )
}