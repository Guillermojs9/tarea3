import { RiegoData } from "../interface/riegoData";
import { valvulaMapper } from "../../valvulaMapper";
import { Group } from "../interface/riegoDataLocal";

export const riegoMapper = (item: RiegoData): Group => {
    return {
        name: item.name,
        lastDate: item.lastDate,
        valvulas: valvulaMapper(item.values),
    };
}