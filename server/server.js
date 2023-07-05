import express from "express";
import cors from "cors";
import { PORT } from "./src/config/env_config.js"
import { healthRouter } from "./src/routes/healthRoute.js";
import { customReqLogger } from "./src/middleware/customReqLogger.js";
import { connectToDb } from "./src/config/db_config.js"
import customErrorHandler from "./src/middleware/customErrorHandler.js";
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = express();

server.use(cors())
server.use(express.json())
server.use(customReqLogger)
console.log(__dirname);






server.use("/", express.static(__dirname + "/public"))
server.use("/", healthRouter);

server.get("*", (req, res) => {
    res.redirect("/pages/redirect/redirect.html")
})

server.use(customErrorHandler)

const startServer = async () => {
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

startServer();

