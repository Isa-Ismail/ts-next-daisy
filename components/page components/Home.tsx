import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { addCart, toggle } from '../../utils/actions';
import useFetch from '../../utils/hooks/customhooks';
import { Store } from '../../utils/store';
import { CartItem } from '../../utils/types';
import { error } from 'console';

interface Props {}

const Home: React.FC<Props> = () => {

  const { state, dispatch } = React.useContext(Store)

  console.log(state)

  const product: CartItem = {
    id: 1,
    name: 'name',
    image: 'image',
    price: 1,
    countInStock: 1,
    qty: 1,
  }
  
  const {bought, cart} = state

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
  }

  const [screen, setScreen] = useState('')

  const handleChange = (e: any) => {
    setForm( prev =>  ({...prev, [e.target.name]: e.target.value}))
  }

  const [url, setUrl] = useState('')

  const sub = (image: any): void => {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'fsns6mal')
    fetch('https://api.cloudinary.com/v1_1/dfffbcsa8/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(error => console.log(error))
  }

  const data = useFetch('https://ict-6.vercel.app/api/auth')

  console.log(form, data)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {url && <img src={url} alt="image" />}
          <label htmlFor="pic" className="btn btn-outline btn-accent">Upload</label>
          <input id='pic' style={{display: "none"}} type="file" onChange={(e: any) => { sub(e.target.files[0]) }} />              
          <input type="text" onChange={(e: any) => { setScreen(e.target.value) }} />
          <br />
          <br />
          <input type="text" name="email" value={form.email} onChange={handleChange} />
          <h1 className="text-5xl font-bold">Ts next Daisy {cart.cartItems && cart.cartItems[0] && cart.cartItems[0].id} 👌🤖</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button onClick={() => dispatch(addCart(product, 10))} className="btn btn-outline btn-accent">Get Started</button>
          <button onClick={() => dispatch(toggle())} className="btn btn-outline btn-accent">Toggle to dark mode</button>
        </div>
      </div>
    </div>
  )
}

export default Home