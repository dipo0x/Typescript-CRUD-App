import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import config from 'config';

const MONGO_URI =  config.get("dbUri") as string;

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: MONGO_URI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: false,
    entities: [User, Post],
})