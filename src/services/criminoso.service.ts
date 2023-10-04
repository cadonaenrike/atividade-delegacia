import repository from "../database/prisma.database";
import { CriminosoDto } from "../dtos/criminoso.dto";
import { ResponseDto } from "../dtos/response.dto";
import { Criminoso } from "../models/crimonoso.model";

class CriminosoService {
  public async list(): Promise<ResponseDto> {
    const data = await repository.criminoso.findMany();

    return {
      code: 200,
      message: "Criminosos listado",
      data,
    };
  }

  public async create(data: CriminosoDto): Promise<ResponseDto> {
    const novoCriminoso = new Criminoso(data.nomeCompleto, data.cpf);

    const createCriminoso = await repository.criminoso.create({
      data: {
        nomeCompleto: novoCriminoso.nomeCompleto,
        cpf: novoCriminoso.cpf,
      },
    });

    return {
      code: 200,
      message: "Criminoso criado com sucesso",
      data: createCriminoso,
    };
  }
}
export default new CriminosoService();
