export interface Producto {
    id?: string;
    nombre: string;
    descripcionCorta: string;
    caracteristicas: string;
    valor: number;
    imagen?: string;
    createDate?: Date;
    updateDate: Date;
}