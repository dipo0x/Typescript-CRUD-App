import "reflect-metadata";
import * as config from "config";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

const mongo_uri = config.get("dbUri") as string;

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: mongo_uri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: false,
    entities: [User, Post],
})