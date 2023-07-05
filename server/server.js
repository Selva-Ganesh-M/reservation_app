import express from "express";
import cors from "cors";
import { healthRouter } from "./src/routes/healthRoute.js";
import { customReqLogger } from "./src/middleware/customReqLogger.js";
import customErrorHandler from "./src/middleware/customErrorHandler.js";
import path from "path"
import { fileURLToPath } from 'url';
import { startServer } from "./src/utils/startServer.js";
import { customLogMaintainer } from "./src/middleware/customLogMaintainer.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = express();

server.use(cors())
server.use(express.json())
server.use(customLogMaintainer)
server.use(customReqLogger)
console.log(__dirname);






server.use("/", express.static(__dirname + "/public"))
server.use("/", healthRouter);

server.get("*", (req, res) => {
    res.redirect("/pages/redirect/redirect.html")
})

server.use(customErrorHandler)


startServer(server);

