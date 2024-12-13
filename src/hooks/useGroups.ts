import { useState, useEffect } from "react";
import { Group } from "../interface/riegoDataLocal";
import { fetchGroups } from "../conexion/fetchGroups";


export function useGroups() {
    const [groups, setGroups] = useState<Group[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data: Group[] = await fetchGroups();
            setGroups(data);
        };
        fetchData();
    }, []);

    return { groups };
}