import { Router } from "express";
import CrimeController from "../controllers/crime.controller";

export const crimesRoutes = () => {
  const router = Router();

  router.get("/", new CrimeController().index);
  router.post("/", new CrimeController().create);
  // router.delete("/:id", new );
  // router.put("/:id", new);

  return router;
};
