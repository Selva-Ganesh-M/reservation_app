import express from "express";
import cors from "cors";
import { PORT } from "./src/config/env_config.js"
import { healthRouter } from "./src/routes/healthRoute.js";
import { customReqLogger } from "./src/middleware/customReqLogger.js";
import { connectToDb } from "./src/config/db_config.js"

const server = express();

server.use(cors())
server.use(express.json())
server.use(customReqLogger)

server.use("/", healthRouter);

const startServer = async () => {
    try {
        await connectToDb();
        server.listen(PORT, () => {
            console.log(`server is listening at PORT ${PORT}`);
        })

    } catch (error) {
        console.log("server failed to start");
        console.log(error.message);
    }
}

startServer();

