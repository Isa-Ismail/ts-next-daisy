import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { addCart, toggle } from '../../utils/actions';
import { Store } from '../../utils/store';
import { CartItem } from '../../utils/types';

interface Props {}

const Home: React.FC<Props> = () => {

  const { state, dispatch } = React.useContext(Store)

  const product: CartItem = {
    id: 1,
    name: 'name',
    image: 'image',
    price: 1,
    countInStock: 1,
    qty: 1,
  }
  
  const {bought, cart} = state
  console.log(bought)
  console.log(cart.cartItems)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
  }

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  // useEffect(() => {
  //   fetch('https://selise.vercel.app/api/products').then(res => res.json()).then(data => {
  //     console.log(data)
  //   })
  // }, [])

  return (<div>
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Ts next Daisy { cart.cartItems&&cart.cartItems[0]&&cart.cartItems[0].id } 👌🤖</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={()=> dispatch(addCart(product, 10))} className="btn btn-outline btn-accent">Get Started</button>
                        <button onClick={() => dispatch(toggle())} className="btn btn-outline btn-accent">Toggle to dark mode</button>
                    </div>
                  </div>
              </div>
          </div>)
}

export default Home