import "reflect-metadata";
import * as config from "config";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

const database_type = config.get("database_type") as string;
const database_host = config.get("database_host") as string;
const database_port = config.get("database_port") as number;
const database_username = config.get("database_username") as string;
const database_password = config.get("database_password") as string;
const database_name = config.get("database_name") as string;

export const AppDataSource = new DataSource({
    "type": database_type as any, 
    "host": database_host, 
    "port": database_port, 
    "username": database_username, 
    "password": database_password, 
    "database": database_name, 
    "synchronize": true, 
    "logging": false,
    "entities": [User, Post],
})