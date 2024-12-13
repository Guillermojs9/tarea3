import { Group } from "../interface/riegoDataLocal";
import { HttpAxios } from "../http/HttpAxios";

const url = "http://192.168.1.136:3000/items";

export async function fetchGroups(): Promise<Group[]> {
    const httpAxios = new HttpAxios();
    const data = await httpAxios.getGroups(url);
    return data;
}