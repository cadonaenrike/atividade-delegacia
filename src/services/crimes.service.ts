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

    return {
      code: 201,
      message: "Crime criado com sucesso",
      data: createCrime,
    };
  }

  public async getCrimeById(id: string): Promise<ResponseDto> {
    const crime = await repository.crimes.findUnique({
      where: {
        id,
      },
    });

    if (!crime) {
      return {
        code: 404,
        message: "Crime não encontrado",
        data: null,
      };
    }

    return {
      code: 200,
      message: "Crime encontrado com sucesso",
      data: crime,
    };
  }

  public async updateCrime(id: string, data: CrimesDto): Promise<ResponseDto> {
    const updatedCrime = await repository.crimes.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        criminoso_id: data.criminoso_id,
      },
    });

    return {
      code: 200,
      message: "Crime atualizado com sucesso",
      data: updatedCrime,
    };
  }

  public async deleteCrime(id: string): Promise<ResponseDto> {
    const deletedCrime = await repository.crimes.delete({
      where: {
        id,
      },
    });

    return {
      code: 200,
      message: "Crime excluído com sucesso",
      data: deletedCrime,
    };
  }
}

export default new CrimeService();
