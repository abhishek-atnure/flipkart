import { useState } from 'react'

export default function useCounter() {
    const [count, setCount]= useState(0);
    const increment=()=>{
        setCount(prevCount=> prevCount + 1)
        };

    const decrement=()=>{
        setCount(prevCount=>prevCount === 0 ? null : prevCount - 1)
    };



    return  [ count, increment, decrement]
    
}
