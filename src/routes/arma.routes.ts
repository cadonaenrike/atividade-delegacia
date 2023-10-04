import { Router } from "express";
import ArmaController from "../controllers/arma.controller";

export const armaRoutes = () => {
  const router = Router();
  const armaController = new ArmaController();

  router.post("/", armaController.create);
  router.get("/", armaController.index);

  return router;
};
