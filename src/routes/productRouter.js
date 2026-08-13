import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "express";
import renderPage from "../utils/renderPage.js";

export function createProductRouter(vite) {
  const router = Router()

  router.get('/:id', async (req, res) => {
    try {
      const { getProduct } = await vite.ssrLoadModule("/src/data/products.js")
      const { default: ProductPage } = await vite.ssrLoadModule("/src/ProductPage.jsx")

      const product = await getProduct(req.params.id)
      if (!product) {
        res.status(404).send("Product not found")
        return
      }
      const appHtml = renderToString(React.createElement(ProductPage, {product}))
      const template = renderPage(appHtml)
      const html = await vite.transformIndexHtml(req.url, template)
      res.status(200).set({"Content-Type": "text/html"}).send(html)
    } catch(e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message)
    }
  })

  return router
}