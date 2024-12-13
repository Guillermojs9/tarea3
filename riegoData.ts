export interface RiegoData {
    name: string;
    lastDate: string;
    values: Value[];
}

export interface Value {
    name: string;
    state: boolean;
}
