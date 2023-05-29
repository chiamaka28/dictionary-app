import { useState } from "react"
import search from "../assets/search.png"
const Input = () => {
  const [text, setText] = useState('')
  return (
    <div className="relative">
      <input className="bg-grey w-full outline-0 py-2 px-4 my-4 rounded-lg"/>
      <img  className="w-6 absolute top-6 right-6" src={search} alt="" />
    </div>
  )
}

export default Input
