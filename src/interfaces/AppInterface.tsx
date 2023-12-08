export interface Task {
    id: string;
    content: string;
    statut: Boolean;
}

export interface User {
    firstname: string;
    lastname: string;
    bio: string;
    id: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface Movie {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
}