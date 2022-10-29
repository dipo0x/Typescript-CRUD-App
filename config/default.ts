import * as dotenv from "dotenv"
require('dotenv').config({ path: __dirname + '../.env'})

export default {
	port: process.env.PORT,
	host: process.env.HOST,
	dbUri: process.env.MONGO_URI,
	saltWorkFactor: process.env.saltWorkFactor
}