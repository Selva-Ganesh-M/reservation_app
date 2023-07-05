import express from "express"
import { getHealth, helpRedirect } from "../controllers/healthController.js"

const router = express.Router();

router.get("/api/healthz", getHealth)

router.get("/", helpRedirect)



export const healthRouter = router;