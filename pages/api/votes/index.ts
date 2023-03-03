import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { code } from "../../../lib/code";
import { prisma } from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Kamu harus login terlebih dulu" });
  }

  // Create New
  if (req.method === "POST") {
    const result = await prisma.votes.create({
      data: {
        candidates: req.body.candidates,
        endDateTime: req.body.endDateTime,
        startDateTime: req.body.startDateTime,
        title: req.body.title,
        publisher: req.body.publisher,
        code: code(6),
        deleteAt: null,
      },
    });

    return res.json(result);
  }

  return res.status(200).json({ data: "Hello World" });
}
