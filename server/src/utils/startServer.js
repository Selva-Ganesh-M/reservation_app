import { PORT } from "../config/env_config.js";
import { connectToDb } from "../config/db_config.js";

export const startServer = async (server) => {
    try {
        await connectToDb();
        server.listen(PORT, () => {
            console.log(`server is listening at PORT ${PORT}`);
        })

    } catch (error) {
        console.log(`server failed to start: ${error.message}`);
        console.log(error.message);
    }
}