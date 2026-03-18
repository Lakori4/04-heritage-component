"use client"

import { useState } from "react"
import Counter from "@/components/Counter"
import Product from "@/components/Product"
import "./page.css";


export type Bought = {
  name: string,
  id: string,
}

const Page = () => {

  const [counter, setCounter] = useState<number>(0)
  const [list, setList] = useState<Bought[]>([])
  const products = ["Front Wing", "Rear Wing", "PU", "Sidepods"]

  return (
    <div className="page">
      <div className="comp">
      <h1>Counters</h1>
      <Counter count={counter} setCount={setCounter}/>
      <Counter count={counter} setCount={setCounter}/>
      </div>
      <div className="comp">
      <h1>Shopping cart</h1>
      {products.map((p) => (<Product key={p} productName={p} list={list} setList={setList}/>))}
      {list.map((e) => (<h2 className="bought" onClick={() => (setList(list.filter( p => p.id !== e.id )))} key={e.id}>{e.name}</h2>))}
      </div>

    </div>
  )
}

export default Page