import { v4 as uuid } from "uuid";
import { Armas } from "./armas.model";
import { Crime } from "./crimes.model";

export class Criminoso {
  private id: string;
  public armas!: Armas[];
  public crimes!: Crime[];

  constructor(public nomeCompleto: string, public cpf: string) {
    this.id = uuid();
  }

  public getSave() {
    return {
      id: this.id,
      nomeCompleto: this.nomeCompleto,
      cpf: this.cpf,
    };
  }
}
