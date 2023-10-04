import { v4 as uuid } from "uuid";

export class Armas {
  private id: string;

  constructor(
    public nome: string,
    private criminoso_id: string,
    private crimes_id: string
  ) {
    this.id = uuid();
  }

  public getCriminosoId() {
    return this.criminoso_id;
  }

  public getCrimesId() {
    return this.crimes_id;
  }

  public getSave() {
    return {
      nome: this.nome,
      criminoso_id: this.criminoso_id,
      crimes_id: this.crimes_id,
    };
  }
}
