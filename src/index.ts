import * as express from "express";
import * as config from "config";
import log from "./logger";
import connect from "./db/connect";
import accountRoute from "./routes/account.route"

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    log.info(`Server listening on port ${port}`);
    connect()
    accountRoute(app)
});