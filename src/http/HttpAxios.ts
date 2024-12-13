import axios from "axios";
import { Group } from "../interface/riegoDataLocal";
import { RiegoData } from "../interface/riegoData";
import { riegoMapper } from "../mapper/riegoMapper";

export class HttpAxios {
    async getGroups(route: string): Promise<Group[]> {
        const response = await axios.get<RiegoData[]>(route);
        const dataGroups = response.data.map((item: RiegoData) => riegoMapper(item));
        return dataGroups;
    }
}