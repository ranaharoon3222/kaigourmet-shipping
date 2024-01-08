// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const allCookies = req.cookies.getAll();
  console.log(allCookies);
  res.status(200).json({ name: 'John Doe' });
}
