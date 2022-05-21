import { createClient } from 'redis'
import { Client } from 'redis-om'

const username = import.meta.env.VITE_REDIS_USERNAME
const password = import.meta.env.VITE_REDIS_PASSWORD

const redis = createClient(`redis://${username}:${password}@localhost:6379`)
redis.connect()
const client = new Client().use(redis)

export default function post() {

    redis.set('foo', 'bar')

}