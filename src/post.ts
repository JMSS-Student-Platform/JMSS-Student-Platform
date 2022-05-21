import { createClient } from 'redis'
import { Client } from 'redis-om'


const redis = createClient('redis://localhost:6379')
await redis.connect()
const client = await new Client().use(redis)

export function post() {

    

}