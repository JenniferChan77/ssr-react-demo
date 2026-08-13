import { Router } from "express";

export function createApiRouter() {
  const router = Router()

  router.get('/recommendations', async (req, res) => {
    const {getRecommendations} = await import('../data/recommentations.js')
    const recs = await getRecommendations(req.query.exclude)
    res.json({recommendations: recs})
  })

  router.get('/reviews', async (req, res) => {
    const {getReviews} = await import('../data/review.js')
    const data = await getReviews(req.query.cursor)
    res.json(data)
  })

  return router
}