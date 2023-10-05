import { Request, Response } from "express";
import armaService from "../services/arma.service";

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

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).send({
          ok: false,
          message: "ID da arma não fornecido",
        });
      }

      const result = await armaService.getArmaById(id);

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Arma não encontrada",
        });
      }

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, criminoso_id, crimes_id } = req.body;

      if (!id || !nome || !criminoso_id || !crimes_id) {
        return res.status(400).send({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const result = await armaService.updateArma(id, {
        nome,
        criminoso_id,
        crimes_id,
      });

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Arma não encontrada",
        });
      }

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).send({
          ok: false,
          message: "ID da arma não fornecido",
        });
      }

      const result = await armaService.deleteArma(id);

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Arma não encontrada",
        });
      }

      return res.status(result.code).send(result);
    } catch (error: any) {
      res.status(500).send({
        ok: false,
        message: error.toString(),
      });
    }
  }
}

export default ArmaController;
