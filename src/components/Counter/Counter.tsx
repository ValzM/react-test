import { useEffect, useState } from "react";

interface Color{
    red: Number;
    blue: Number;
    green: Number;
}
export default function Counter(){
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState({red: 31, blue: 31, green: 31} as Color)

    useEffect(()=>{
        if (counter === 50) {
            alert("Tu es vraiment déterminé(e) !")
        }
    }, [counter])

    const handleClick = () => {    
        setCounter(counter + 1)
        setColor({red: Math.random() * 255, blue: Math.random()* 255, green: Math.random()*255})
    }
    return (
        <main className="counter-wrapper" style={{background: `rgb(${color.red},${color.blue},${color.green}`}}>
            <button onClick={handleClick}>Tu as cliqué sur moi {counter} fois !</button>
        </main>
    )
}