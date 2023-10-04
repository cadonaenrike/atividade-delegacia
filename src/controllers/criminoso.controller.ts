import { Request, Response } from "express";
import criminosoService from "../services/criminoso.service";

class CriminosoController {
  public async index(req: Request, res: Response) {
    const result = await criminosoService.list();

    return res.status(result.code).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
      const { nomeCompleto, cpf } = req.body;

      if (!nomeCompleto || !cpf) {
        return res.status(400).send({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const result = await criminosoService.create({
        nomeCompleto,
        cpf,
      });

      return res.status(201).send({
        ok: true,
        message: "Criminoso cadastrado!",
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
export default CriminosoController;
