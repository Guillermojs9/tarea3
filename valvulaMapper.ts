import { Value } from "./riegoData";
import { Valvula } from "./Valvula";

export const valvulaMapper = (items: Value[]): Valvula[] => {
    return items.map(item => ({
        nombre: item.name,
        estado: item.state,
    }));
};
