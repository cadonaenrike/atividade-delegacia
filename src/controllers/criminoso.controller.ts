import { Request, Response } from "express";
import criminosoService from "../services/criminoso.service";

class CriminosoController {
  public async index(req: Request, res: Response) {
    try {
      const criminosos = await criminosoService.listCriminosos();
      return res.status(200).json({
        ok: true,
        data: criminosos,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: "Erro ao listar",
      });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { nomeCompleto, cpf } = req.body;

      if (!nomeCompleto || !cpf) {
        return res.status(400).json({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const novoCriminoso = await criminosoService.createCriminoso({
        nomeCompleto,
        cpf,
      });

      return res.status(201).json({
        ok: true,
        message: "Criminoso cadastrado!",
        data: novoCriminoso,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: "Erro ao Cadastrar",
      });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          ok: false,
          message: "ID do criminoso não fornecido",
        });
      }

      const criminoso = await criminosoService.getCriminosoById(id);

      if (!criminoso) {
        return res.status(404).json({
          ok: false,
          message: "Criminoso não encontrado",
        });
      }

      return res.status(200).json({
        ok: true,
        data: criminoso,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: "Erro",
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nomeCompleto, cpf } = req.body;

      if (!id || !nomeCompleto || !cpf) {
        return res.status(400).json({
          ok: false,
          message: "Dados incorretos",
        });
      }

      const updatedCriminoso = await criminosoService.updateCriminoso(id, {
        nomeCompleto,
        cpf,
      });

      if (!updatedCriminoso) {
        return res.status(404).json({
          ok: false,
          message: "Criminoso não encontrado",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Criminoso atualizado com sucesso",
        data: updatedCriminoso,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: "Erro ao Atualizar",
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          ok: false,
          message: "ID do criminoso não fornecido",
        });
      }

      const deletedCriminoso = await criminosoService.deleteCriminoso(id);

      if (!deletedCriminoso) {
        return res.status(404).json({
          ok: false,
          message: "Criminoso não encontrado",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Criminoso excluído com sucesso",
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        message: "Erro ao Deletar",
      });
    }
  }
}

export default CriminosoController;
