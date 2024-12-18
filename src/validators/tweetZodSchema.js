import {z} from 'zod'

export const tweetZoodSchema=z.object({
    body:z.string().min(1).max(280)
})