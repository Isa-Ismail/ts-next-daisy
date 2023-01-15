export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    countInStock: number;
    qty: number;
}

export interface State {
    bought: boolean;
    cart: {
        cartItems: CartItem[];
    }
}

export interface Action {
    type: string;
    payload?: any;
}

interface Form  {
    name: string;
    email: string;
    password: string;
}

let page: (string | number)[] = ['hello', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let uuid: string | number = 1
let name: string = 'name'