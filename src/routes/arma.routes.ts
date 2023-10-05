import { Router } from "express";
import ArmaController from "../controllers/arma.controller";
import ArmaService from "../services/arma.service";

export const armaRoutes = () => {
  const router = Router();

  router.post("/", new ArmaController().create);
  router.get("/", new ArmaController().index);
  router.get("/:id", new ArmaController().show);
  router.put("/:id", new ArmaController().update);
  router.delete("/:id", new ArmaController().delete);

  return router;
};
