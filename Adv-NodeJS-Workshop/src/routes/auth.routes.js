import { Router } from "express";
import { ClientController } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.get("/", ClientController.getAllClients);
authRouter.post("/register", ClientController.registerClient);
authRouter.post("/login", ClientController.loginClient);
