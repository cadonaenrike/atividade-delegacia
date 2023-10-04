import { Router } from "express";

import criminosoController from "../controllers/criminoso.controller";

export const criminosoRoutes = () => {
  const router = Router();

  router.get("/", new criminosoController().index);
  router.post("/", new criminosoController().create);
  router.delete("/:id", new criminosoController().delete);
  router.put("/:id", new criminosoController().update);

  return router;
};
