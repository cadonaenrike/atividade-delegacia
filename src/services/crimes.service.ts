import repository from "../database/prisma.database";
import { CrimesDto } from "../dtos/crimes.dto";
import { Crime } from "../models/crimes.model";
import { ResponseDto } from "../dtos/response.dto";

class CrimeService {
  public async list(): Promise<ResponseDto> {
    const data = await repository.crimes.findMany({
      include: { arma: true },
    });
    return {
      code: 200,
      message: "Crimes listados",
      data,
    };
  }

  public async create(data: CrimesDto) {
    const novoCrime = new Crime(data.name, data.criminoso_id);

    const createCrime = await repository.crimes.create({
      data: novoCrime.getSave(),
    });

    return createCrime;
  }
}
export default new CrimeService();
