import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addCustom } from "../features/counterSlice"

export default function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div>
                <input type="number" onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={(e) => {e.preventDefault(); dispatch(addCustom(Number(input)))}}>Add Custom Number</button>
            </div>
        </div>
    )
}