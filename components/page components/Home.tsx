import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {

  const [page, setPage] = useState(0)

  useEffect(() => {

  }, [])

  return (
    <div className='min-h-screen'>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
            <h1 className="text-5xl font-bold">Ts next Daisy 👌🤖 { page }</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-outline btn-accent">Get Started</button>
              </div>
            </div>
          </div>
  </div>)
}

export default Home