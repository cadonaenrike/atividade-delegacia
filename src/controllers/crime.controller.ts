import { Request, Response } from "express";
import crimesService from "../services/crimes.service";

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

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).send({
          ok: false,
          message: "ID do crime não fornecido",
        });
      }

      const result = await crimesService.getCrimeById(id);

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Crime não encontrado",
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
      const { name, criminoso_id } = req.body;

      if (!id || !name || !criminoso_id) {
        return res.status(400).send({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const result = await crimesService.updateCrime(id, {
        name,
        criminoso_id,
      });

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Crime não encontrado",
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
          message: "ID do crime não fornecido",
        });
      }

      const result = await crimesService.deleteCrime(id);

      if (result.code === 404) {
        return res.status(404).send({
          ok: false,
          message: "Crime não encontrado",
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

export default CrimeController;
