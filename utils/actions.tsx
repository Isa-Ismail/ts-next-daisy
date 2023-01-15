import { CartItem } from "./types";

export const addCart = (product: CartItem, qty: number): {type:string, payload: CartItem} => {
    return {
        type: "CART_ADD_ITEM",
        payload: {
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
            id: product.id,
        },
    };
}

export const removeCart = (id: string | number) => {
    return {
        type: "CART_REMOVE_ITEM",
        payload: id,
    };
}

export const toggle = () => {
    return {
        type: "TOGGLE",
    };
}