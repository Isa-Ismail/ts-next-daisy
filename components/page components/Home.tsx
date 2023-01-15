import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

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

  interface Form  {
    name: string;
    email: string;
    password: string;
  }

  let page: (string | number)[] = ['hello', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let uuid: string | number = 1
  let name: string = 'name'
  
  useEffect(() => {
    fetch('https://selise.vercel.app/api/products').then(res => res.json()).then(data => {
      console.log(data)
    })
  }, [])

  console.log(form)

  return (<div>
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Ts next Daisy 👌🤖</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline btn-accent">Get Started</button>
                    </div>
                  </div>
              </div>
          </div>)
}

export default Home