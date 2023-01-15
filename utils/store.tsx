import { createContext, useReducer } from "react";
import { Action, CartItem, State } from "./types";

export const Store = createContext<any>({});

const initialState: State = {
    bought: false,
    cart: {
        cartItems: [],
    },
};

const reducer = (state: State, action: Action) => {
    const { type } = action;
    const payload = action.payload;
    switch (type) {
        case "TOGGLE":
            return { ...state, bought: !state.bought };
        case "CART_ADD_ITEM":
            const item: CartItem = payload;
            const existItem = state.cart.cartItems.find(
                (x: CartItem) => x.id === item.id
            );
            if (existItem) {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: state.cart.cartItems.map((x: CartItem) =>
                            x.id === existItem.id ? item : x
                        ),
                    },
                };
            } else {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: [...state.cart.cartItems, item],
                    },
                };
            }
        case "CART_REMOVE_ITEM":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter(
                        (x: CartItem) => x.id !== payload
                    ),
                },
            };
        default:
            return state;
    }
};

export function StoreProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}

