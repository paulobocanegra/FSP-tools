import { useState } from "react";
import "./cycle.css";


const CycleComponent = (props) => {
    const [lit, setLit] = useState(false)
    const [score, setScore] = useState(false)

    const handleClick = (e) => {
        if (props.position + 1 === props.allDebuggers[props.tile]){
            setScore(!score)
        } else {
            setLit(!lit)
            props.setLoser(true)
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
        }
        if(!lit){
            props.setPosition(props.position + 1)
        } else {
            props.setPosition(props.position - 1)
        }
    }

    return (
        <>
            <div className={`cycle-container ${score ? "lit": ""} ${lit ? "nope": ""}` } onClick={handleClick}> 
                <h1>{props.tile}</h1>
            </div>
        </>
    )
}

export default CycleComponent;