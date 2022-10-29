import express from 'express';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import config from 'config';
import connect from "./db/connect"

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    log.info(`Server listening on port ${port}`);
    connect()
});