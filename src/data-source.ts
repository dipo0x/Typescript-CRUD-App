import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import * as dotenv from "dotenv"

require('dotenv').config({ path: __dirname + '/.env'})

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: false,
    entities: [User, Post],
})