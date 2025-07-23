import { getAllPosts } from '../../../lib/notion/getNotionPost'

export default async function handler(req, res) {
  const posts = await getAllPosts()
  res.status(200).json({ results: posts })
}