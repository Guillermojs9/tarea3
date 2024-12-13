import { Valvula } from "./Valvula";

export interface Group {
    name: string;
    lastDate: string;
    valvulas: Valvula[];
}