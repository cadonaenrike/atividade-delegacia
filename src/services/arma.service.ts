import repository from "../database/prisma.database";
import { ResponseDto } from "../dtos/response.dto";
import { ArmaDto } from "../dtos/armas.dto";
import { Armas } from "../models/armas.model";

class ArmaService {
  public async list(): Promise<ResponseDto> {
    const data = await repository.armas.findMany({
      include: { crimes: true, criminoso: true },
    });
    return {
      code: 200,
      message: "Armas listadas com sucesso",
      data,
    };
  }

  public async create(data: ArmaDto) {
    const novaArma = new Armas(data.nome, data.criminoso_id, data.crimes_id);

    const createArma = await repository.armas.create({
      data: novaArma.getSave(),
    });

    return {
      code: 201,
      message: "Arma criada com sucesso",
      data: createArma,
    };
  }

  public async getArmaById(id: string): Promise<ResponseDto> {
    const arma = await repository.armas.findUnique({
      where: {
        id,
      },
    });

    if (!arma) {
      return {
        code: 404,
        message: "Arma não encontrada",
        data: null,
      };
    }

    return {
      code: 200,
      message: "Arma encontrada com sucesso",
      data: arma,
    };
  }

  public async updateArma(id: string, data: ArmaDto): Promise<ResponseDto> {
    const updatedArma = await repository.armas.update({
      where: {
        id,
      },
      data: {
        nome: data.nome,
        criminoso_id: data.criminoso_id,
        crimes_id: data.crimes_id,
      },
    });

    return {
      code: 200,
      message: "Arma atualizada com sucesso",
      data: updatedArma,
    };
  }

  public async deleteArma(id: string): Promise<ResponseDto> {
    const deletedArma = await repository.armas.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: "Arma excluída com sucesso",
      data: deletedArma,
    };
  }
}

export default new ArmaService();
