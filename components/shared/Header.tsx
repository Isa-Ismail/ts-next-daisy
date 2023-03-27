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
  <nav className={`${show?"min-h-[16rem] bg-slate-500 shadow-md fixed z-10 w-screen":"bg-slate-500 shadow-md fixed z-10 w-screen"}`}>
  <div className="md:flex justify-between p-2">
    <ul className="flex space-x-4 p-4 sm:hidden md:flex">
      <li className="cursor-pointer p-2 hover:bg-white">Home</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 1</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 2</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 3</li>
    </ul>
    {!show?<ul className="space-x-4 p-4 sm:block md:hidden">
      <li className="cursor-pointer p-2" onClick={() => setShow (e=> !e)}>
        <Image alt="" src={'/favicon.ico'} width={30} height={30} />
      </li>
    </ul>:<ul className="space-x-4 p-4 sm:block md:hidden">
      <li className="text-white cursor-pointer p-2" onClick={() => setShow (e=> !e)}>
        <img alt="" src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/512px-Flat_cross_icon.svg.png?20170316053531' width={30} height={30} />
      </li>
    </ul>}
    <ul className="space-x-4 p-4 sm:hidden md:flex">
      <li className="cursor-pointer p-2 hover:bg-white">Login / Sign Up</li>
    </ul>
    {show?<ul className="flex flex-col justify-center z-20 w-screen items-center">
      <li className="cursor-pointer p-2 hover:bg-white">Home</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 2</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 3</li>
      <li className="cursor-pointer p-2 hover:bg-white">page 4</li>
    </ul>:null}
  </div>
</nav>)
}

export default Header