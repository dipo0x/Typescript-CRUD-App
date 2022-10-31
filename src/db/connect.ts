import { AppDataSource } from "../data-source"

function createConnection() {
	AppDataSource.initialize().then(async () => {
		console.log('Database connected')

    }).catch(error => console.log("an error occured"))
}

export default createConnection;