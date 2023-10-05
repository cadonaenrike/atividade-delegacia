import repository from "../database/prisma.database";
import { CriminosoDto } from "../dtos/criminoso.dto";
import { ResponseDto } from "../dtos/response.dto";

class CriminosoService {
  public async listCriminosos(): Promise<ResponseDto> {
    const criminosos = await repository.criminoso.findMany();

    return {
      code: 200,
      message: "Criminosos listados com sucesso",
      data: criminosos,
    };
  }

  public async createCriminoso(data: CriminosoDto): Promise<ResponseDto> {
    const novoCriminoso = await repository.criminoso.create({
      data: {
        nomeCompleto: data.nomeCompleto,
        cpf: data.cpf,
      },
    });

    return {
      code: 201,
      message: "Criminoso criado com sucesso",
      data: novoCriminoso,
    };
  }

  public async getCriminosoById(id: string): Promise<ResponseDto> {
    const criminoso = await repository.criminoso.findUnique({
      where: {
        id,
      },
    });

    if (!criminoso) {
      return {
        code: 404,
        message: "Criminoso não encontrado",
        data: null,
      };
    }

    return {
      code: 200,
      message: "Criminoso encontrado com sucesso",
      data: criminoso,
    };
  }

  public async updateCriminoso(
    id: string,
    data: CriminosoDto
  ): Promise<ResponseDto> {
    const updatedCriminoso = await repository.criminoso.update({
      where: {
        id,
      },
      data: {
        nomeCompleto: data.nomeCompleto,
        cpf: data.cpf,
      },
    });

    return {
      code: 200,
      message: "Criminoso atualizado com sucesso",
      data: updatedCriminoso,
    };
  }

  public async deleteCriminoso(id: string): Promise<ResponseDto> {
    const deletedCriminoso = await repository.criminoso.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: "Criminoso excluído com sucesso",
      data: deletedCriminoso,
    };
  }
}

export default new CriminosoService();
