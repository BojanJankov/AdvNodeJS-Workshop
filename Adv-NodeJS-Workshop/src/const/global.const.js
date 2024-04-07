import { Router } from "express";
import { productRouter } from "../routes/product.routes.js";
import { orderRouter } from "../routes/order.routes.js";
import { userRouter } from "../routes/user.routes.js";
import { authRouter } from "../routes/auth.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productRouter);
globalRouter.use("/orders", orderRouter);
globalRouter.use("/users", userRouter);
globalRouter.use("/clients", authRouter);
