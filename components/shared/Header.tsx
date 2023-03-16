import Image from "next/image"
import { useEffect, useState } from "react"
const Header = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setShow(false)
      }
      return () => {
        window.removeEventListener('resize', () => {
          if (window.innerWidth > 768) {
            setShow(false)
          }
        })
      }
    })
  }, [show])

  return (
  <nav className={`${show?"min-h-screen bg-slate-500 shadow-md":"bg-slate-500 shadow-md"}`}>
  <div className="lg:flex justify-between">
    <ul className="flex space-x-4 p-4 sm:hidden lg:flex">
      <li className="cursor-pointer p-2 hover:bg-white">Home</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 1</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 2</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 3</li>
    </ul>
    {!show?<ul className="space-x-4 p-4 sm:block lg:hidden">
      <li className="cursor-pointer p-2" onClick={() => setShow (e=> !e)}>
        <Image alt="" src={'/favicon.ico'} width={30} height={30} />
      </li>
    </ul>:<ul className="space-x-4 p-4 sm:block lg:hidden">
      <li className="text-white cursor-pointer p-2" onClick={() => setShow (e=> !e)}>
        X
      </li>
    </ul>}
    <ul className="space-x-4 p-4 sm:hidden lg:flex">
      <li className="cursor-pointer p-2 hover:bg-white">a</li>
    </ul>
    {show?<ul className="flex flex-col justify-center">
      <li className="cursor-pointer p-2 hover:bg-white">Home</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 2</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 3</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 4</li>
    </ul>:null}
  </div>
</nav>)
}

export default Header