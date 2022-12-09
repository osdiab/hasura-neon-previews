import { NextApiRequest, NextApiResponse } from "next";

export default function GrantBlogPostApiRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers["x-hasura-hook-secret"] !== process.env.HASURA_HOOK_SECRET) {
        res.status(403);
        res.json({error: "Forbidden"})
        return;
    }

    res.status(500)
    res.json({error: "Not yet implemented"})
}