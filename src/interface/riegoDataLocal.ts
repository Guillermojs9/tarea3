export interface Group {
    name: string;
    lastDate: string;
    valvulas: Valvula[];
}
export interface Valvula {
    nombre: string;
    estado: boolean;
}