import "./cycle.css"
import CycleComponent from "./CycleComponent";
import { useState } from "react";
import { Link } from "react-router-dom";

const CylcleIndex = () =>{
    const allDebuggers = {
        "attach_authenticity_token": 4,
        "handleSubmit": 1,
        "action creator": 7,
        "csrfFetch": 3,
        "storeCurrentUser": 6,
        "SessionController#create ": 5,
        "useEffect of component re-rendering": 8,
        "thunk action creator": 2,
    }
    
    
    const debugArr = Object.keys(allDebuggers)
    const [loser, setLoser] = useState(false)
    const [position, setPosition] = useState(0)

    return (
        <div className="app">
            <Link to="/fsp-style" ><button className="ui-demo-button">UI DEMO</button></Link>
            <div className="cycle-index-container">
                {debugArr.map(tile => {
                    return (
                        <CycleComponent key={allDebuggers[tile]} tile={tile} allDebuggers={allDebuggers} setPosition={setPosition} position={position} loser={loser} setLoser={setLoser}/>
                    )
                })}
            </div>
            {loser ? <div className="loser-container">
                <h1 className="loser-message">HELL NO!</h1> 
            </div>: null}
        </div>
    )
}

export default CylcleIndex;