import armaService from "../services/arma.service";
import { Request, Response } from "express";

class ArmaController {
  public async index(req: Request, res: Response) {
    const result = await armaService.list();

    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { nome, criminoso_id, crimes_id } = req.body;

      if (!nome || !criminoso_id || !crimes_id) {
        return res.status(400).send({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const result = await armaService.create({
        nome,
        criminoso_id,
        crimes_id,
      });

      return res.status(201).send({
        ok: true,
        message: "Arma cadastrada!",
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
export default ArmaController;
