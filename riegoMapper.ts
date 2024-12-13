import { Group } from "./Group";
import { RiegoData } from "./riegoData";
import { valvulaMapper } from "./valvulaMapper";

export const riegoMapper = (item: RiegoData): Group => {
    return {
        name: item.name,
        lastDate: item.lastDate,
        valvulas: valvulaMapper(item.values),
    };
}