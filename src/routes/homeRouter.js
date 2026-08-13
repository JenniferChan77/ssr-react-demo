import { Router } from "express";
import renderPage from "../utils/renderPage.js";
import React from "react";
import { renderToString } from "react-dom/server";

export function createHomeRouter(vite) {
  const router = Router()
  
  router.get('/', async (req, res) => {
    try {
      const { getAllProducts } = await vite.ssrLoadModule("/src/data/products.js")
      const { default: HomePage } = await vite.ssrLoadModule("/src/HomePage.jsx")

      const products = await getAllProducts()
      const homeHtml = renderToString(React.createElement(HomePage, {products}))

      const template = renderPage(homeHtml)
      const html = await vite.transformIndexHtml(req.url, template)
      
      res.status(200).set({"Content-Type": "text/html"}).send(html)
    } catch (err) {
      vite.ssrFixStackTrace(err)
      console.error(err)
      res.status(500).end(err.message)
    }
  })

  return router
}