import { createContext, useReducer } from "react";

export const Store = createContext<any>({});


interface Cart {
    name: string;
    image: string;
    price: number;
    countInStock: number;
    qty: number;
    product: string;
}

interface state {
    darkMode: boolean;
    cart: {
        cartItems: Cart[];
    };
}

interface action {
    type: string;
    payload?: any;
}

const initialState: state = {
    darkMode: false,
    cart: {
        cartItems: [],
    },
};
