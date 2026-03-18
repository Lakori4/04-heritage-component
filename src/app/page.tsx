"use client"

import { useState } from "react"
import Counter from "@/components/Counter"


const Page = () => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div>
      <Counter count={counter} setCount={setCounter}/>
      <Counter count={counter} setCount={setCounter}/>

    </div>
  )
}

export default Page