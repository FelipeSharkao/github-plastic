import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') {
    if (req.body.password === process.env.PASSWORD)
      return res.status(200).json({ ok: true, login: req.body.login })
    else return res.status(400).json({ ok: false })
  }
}
