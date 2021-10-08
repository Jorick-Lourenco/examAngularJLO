import {Eval} from "./Eval.model"

export interface Restaurant {
  id: number;
  nom: string;
  adresse: string;
  evaluations: Eval[];
}
