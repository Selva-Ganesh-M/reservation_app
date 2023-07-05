import express from "express"
import { healthController } from "../controllers/healthController.js";

const router = express.Router();

router.get("/api/healthz", healthController)

export const healthRouter = router;