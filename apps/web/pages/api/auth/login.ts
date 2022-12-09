import { NextApiRequest, NextApiResponse } from "next";
import { gql, request } from "graphql-request"
import { z } from "zod";

const getMatchingUserQuery = gql`
    query GetUserByUsername(username: String!) {
        id
    }
`
const bodySchema = z.object({username: z.string()})

export default async function LoginApiRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers["x-hasura-hook-secret"] !== process.env.HASURA_HOOK_SECRET) {
        res.status(403);
        res.json({error: "Forbidden"})
        return;
    }
    const { username } = bodySchema.parse(req.body.input);
    const response = await request(process.env.GRAPHQL_API_URL!, getMatchingUserQuery, {username})

    console.log({response})
    res.status(500)
    res.json({error: "Not yet implemented"})
}
