import './Recommendation.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Recommendation(){
    const navigate  = useNavigate()
    //const { cfClicks, ctcClicks, hncClicks } = location.state;
    return (
        <div>
        <button onClick={() => navigate('/')}>Click to go to DataEntry</button>
        <p> This is the recommendation page</p>
        </div>
    )
}