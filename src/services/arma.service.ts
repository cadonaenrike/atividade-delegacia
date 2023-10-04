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
      message: "Armas listados",
      data,
    };
  }

  public async create(data: ArmaDto) {
    const novArma = new Armas(data.nome, data.criminoso_id, data.crimes_id);

    const createArma = await repository.armas.create({
      data: novArma.getSave(),
    });

    return createArma;
  }
}
export default new ArmaService();
