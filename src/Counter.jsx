import {useState} from 'react';

export default function Counter() {
    const [num, setNum] = useState(0);
    const nums = () => {
        setNum(num+1)
    }
    return (
        <>
            <h2>The count is: {num}</h2>
            <button onClick={nums}>Increment</button>
        </>
    )
}