import './ColorBox.css'
import {useState} from 'react'

function randomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export default function ColorBox({colors}){

    const [color, setColor] = useState(randomChoice(colors));

    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor)
    }

    return (
            <div
            className='box'
            style={{backgroundColor: color}}
            onClick={changeColor}>
            </div>

    )
}