import './Recommendation.css';
import cinnamonToast from './cinnamonToast.jpeg';
import cornFlakes from './cornflakes.jpeg';
import honeyNutCheerios from './honeyNutCheerios.jpeg'
import DataEntry from '../DataEntry/DataEntry';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { useState } from "react";


export default function Recommendation(){
    const navigate  = useNavigate()
    
    // const [budget, setBudget] = useState(140.69)

    //const { cfClicks, ctcClicks, hncClicks } = location.state;
    return (
        <div>
        <button onClick={() => navigate('/')}>Click to go to DataEntry</button>
        <p> This is the recommendation page</p>
        <p> Your top picks now based on your ${DataEntry.budget}!</p>
        <img src={cinnamonToast} alt="logo" />
        <button>Click me to buy your optimal Cereal!  </button>

        </div>
    )
}