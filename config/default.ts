import * as dotenv from "dotenv"
require('dotenv').config({ path: __dirname + '/../.env'})

export default {
	port: process.env.PORT,
	host: process.env.HOST,
	dbUri: process.env.MONGO_URI,
	saltWorkFactor: process.env.saltWorkFactor,
	database_type: process.env.DATABASE_TYPE,
	database_host: process.env.DATABASE_HOST,
	database_port: process.env.DATABASE_HOST,
	database_username: process.env.DATABASE_USERNAME,
	database_password: process.env.DATABASE_PASSWORD,
	database_name: process.env.DATABASE_NAME,
}