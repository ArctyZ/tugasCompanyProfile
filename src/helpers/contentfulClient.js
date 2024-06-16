import { createClient } from "contentful";

const SPACE_ID = process.env.SPACE_ID
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const contentfulClient = () => createClient({
    space: SPACE_ID,
    accessToken:ACCESS_TOKEN,
})