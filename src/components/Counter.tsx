"use client"

type Props = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({count, setCount}: Props) => {



    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() =>{setCount(count+1)}}> Sum 1</button>
            <button onClick={() =>{setCount(count-1)}}> Rest 1</button>

        </div>
    )
}

export default Counter