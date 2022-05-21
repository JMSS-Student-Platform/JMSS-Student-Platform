import { createClient } from 'redis'
import { Client } from 'redis-om'

const username = import.meta.env.VITE_REDIS_USERNAME
const password = import.meta.env.VITE_REDIS_PASSWORD

const redis = createClient(`redis://${username}:${password}@localhost:6379`)
await redis.connect()
const client = await new Client().use(redis)

export default async function post() {

    await redis.set('foo', 'bar')

}