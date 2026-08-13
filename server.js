import express from "express";
import {createServer as createViteServer} from "vite"
import { createHomeRouter } from "./src/routes/homeRouter.js";
import { createProductRouter } from "./src/routes/productRouter.js";
import { createApiRouter } from "./src/routes/apiRouter.js";

async function start() {
  const app = express()

  const vite = await createViteServer({
    server: {middlewareMode: true},
    appType: 'custom'
  })
  app.use (vite.middlewares)

  app.use('/api', createApiRouter())
  app.use('/', createHomeRouter(vite))
  app.use('/product', createProductRouter(vite))

  app.listen(3000, ()=> {
    console.log("Running at http://localhost:3000")
  })
}

start()
