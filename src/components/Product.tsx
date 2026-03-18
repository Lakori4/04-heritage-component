"use client"

import  type { Bought } from "@/app/page"
import "./product.css"

type Props = {
    list: Bought[]
    setList: React.Dispatch<React.SetStateAction<Bought[]>>
    productName: string
}

const Product = ({list, setList, productName}: Props) => {

    return(
        <div className="product" onClick={() => {
            setList([...list, {name: productName, id:String(Math.random())}])
        }}>
            <h2>{productName.toUpperCase()}</h2>
        </div>
    )
}

export default Product