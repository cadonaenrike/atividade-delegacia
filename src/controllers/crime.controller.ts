import crimesService from "../services/crimes.service";
import { Request, Response } from "express";

class CrimeController {
  public async index(req: Request, res: Response) {
    const result = await crimesService.list();

    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, criminoso_id } = req.body;

      if (!name || !criminoso_id) {
        return res.status(400).send({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const result = await crimesService.create({
        name,
        criminoso_id,
      });

      return res.status(201).send({
        ok: true,
        message: "Crime cadastrado!",
        data: result,
      });
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
  public show(req: Request, res: Response) {}
  public update(req: Request, res: Response) {}
  public delete(req: Request, res: Response) {}
}
export default CrimeController;
