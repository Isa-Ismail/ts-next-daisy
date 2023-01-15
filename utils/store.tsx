import { createContext, useReducer } from "react";

export const Store = createContext<any>({});

interface state {
    darkMode: boolean;
    cart: {
        cartItems: any[];
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

const reducer = (state: state, action: action) => {
    const { type, payload } = action;
    switch (type) {
        case "DARK_MODE_ON":
            return { ...state, darkMode: true };
        case "DARK_MODE_OFF":
            return { ...state, darkMode: false };
        case "CART_ADD_ITEM":
            const item = payload;
            const existItem = state.cart.cartItems.find(
                (x: any) => x.product === item.product
            );
            if (existItem) {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: state.cart.cartItems.map((x: any) =>
                            x.product === existItem.product ? item : x
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
                        (x: any) => x.product !== payload
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

