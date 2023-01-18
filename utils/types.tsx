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

export interface CartAdd {
    type: string;
    payload: CartItem;
}


//Practice with types

type Form = {
    letter: string;
}
interface Name<T> {
    fName: string;
    lName: T
}

let obj: Name<Form> = {
    fName: 'name',
    lName: {
        letter: 'a'
    }
}

type Arr = { name: string, price: number, quantity: number }

let add: Arr[] = [
    { name: 'name', price: 1, quantity: 1 },
    { name: 'name', price: 1, quantity: 1  },
    { name: 'name', price: 1, quantity: 1  },
]

add.reduce((acc, item) => {
    return acc + item.price * item.quantity
}, 0)

add.find((item) => item.name === 'name')
add.map((item) => item.name)
add.filter((item) => item.name === 'name')
add.forEach ((item) => item.name)
class A implements Form {
    name: string;
    age: number;
    letter: string = 'a';
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    format(): Action {
        return {
            type: '2',
            payload: 2
        }
    }
}

let dada = {
    x: 'name',
    age: 1,
    letter: {
        robber: 'a'
    }
}

let { x, age, letter: { robber: d } } = dada

console.log(x, age, d)


let a: A = new A('name', 1)

let form: Form[] = []
form.push(a)

let page: (string | number)[] = ['hello', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let uuid: string | number = 1
let name: string = 'name'


//genrate 20 fruits in array with random price and quantity
let fruits: string[] = [
    'orange',
    'apple',
    'banana',
    'pineapple',
    'watermelon',
    'grape',
    'mango',
    'strawberry',
    'kiwi',
    'pear',
    'peach',
    'cherry',
    'lemon',
    'lime',
    'pomegranate',
    'coconut',
    'avocado',
]




const funcMockAPIGET = (query: string): Promise<any> => {
    let p = new Promise((resolve, reject) => {
        setTimeout( ()=> resolve(
            fruits.filter(f => f.toLowerCase().includes(query.toLowerCase()))
        ), Math.random()*1000)
    })
    return p
}

console.log(funcMockAPIGET('wat').then(res => res).then(data => console.log(data)).catch(err=> console.log(err)))