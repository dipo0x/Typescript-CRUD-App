import logger from "pino";
import * as dayjs from "dayjs";

const log = logger({
	base: {
		pid: false,
	},
	timestamp: () => `, "time": "${dayjs().format()}"`,
});

export default log;