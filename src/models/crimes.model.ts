import { Armas } from "./armas.model";
import { v4 as uuid } from "uuid";

export class Crime {
  private id: string;

  constructor(public name: string, public criminoso_id: string) {
    this.id = uuid();
  }

  public getSave() {
    return {
      name: this.name,
      criminoso_id: this.criminoso_id,
    };
  }
}
