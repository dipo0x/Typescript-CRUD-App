import { AppDataSource } from "../data-source"

function createConnection() {
	AppDataSource.initialize().then(async () => {
		console.log('Database connected')

    }).catch(error => console.log("Database connection failed"))
}

export default createConnection;