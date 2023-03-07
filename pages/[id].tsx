import { useRouter } from 'next/router'
import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://selise.vercel.app/api/products')
    const data = await res.json()   
    const paths = data.map((product: any) => {
        return {
            params: { id: product._id }
        }  
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id
    const res = await fetch('https://selise.vercel.app/api/products/' + id)
    const data = await res.json()
    return {
        props: { product: data }
    }
}

const Comp = ({ product }: any) => {
    console.log(product)
  return (
      <>
          <div className='flex items-center justify-evenly min-h-screen'>
              <div>
                  <h1>Hello world</h1>
                  {useRouter().query.id}<br />
                  {product.productName}
                  <p>Provident cupiditate voluptatem et in.</p>
                  <button className="btn btn-outline btn-accent">Get Started</button>
                  <button className="btn btn-outline btn-accent">Toggle to dark mode</button>
              </div>
             <div>
                  <h1>Hello world</h1>
                  {useRouter().query.id}<br />
                  {product.productName}
                  <p>Provident cupiditate voluptatem et in.</p>
                  <button className="btn btn-outline btn-accent">Get Started</button>
                  <button className="btn btn-outline btn-accent">Toggle to dark mode</button>
              </div>
              <div>
                  <h1>Hello world</h1>
                  {useRouter().query.id}<br />
                  {product.productName}
                  <p>Provident cupiditate voluptatem et in.</p>
                  <button className="btn btn-outline btn-accent">Get Started</button>
                  <button className="btn btn-outline btn-accent">Toggle to dark mode</button>
              </div>
          </div>
      </>
  )
}

export default Comp