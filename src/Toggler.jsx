import {useState} from 'react';
import './toggler.css'
export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const isHappyFunction = () => {
        return setIsHappy(!isHappy);
    }
    return(
        <>
            <p onClick={isHappyFunction}>
                {isHappy ? '😊' : '😔'}
            </p>
        </>
    )
}