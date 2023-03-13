import './DataEntry.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";

export default function DataEntry(){
    const navigate = useNavigate()
    const [budget, setBudget] = useState(140.69)
    const [cfClicks, setcfcClicks] = useState(0);
    const [ctcClicks, setctcClicks] = useState(0);
    const [hncClicks, sethncClickes] = useState(0);
  

    function countClicks(set, clicks) {
        set(clicks+1);

    }

    function budgetTracker(set, price){
        set(budget-price);
    }
        
    function run(set, price, click){
        countClicks(set, click);
        budgetTracker(setBudget, price);
    }
    return (
        <div>
        <button onClick={() => navigate('/recommendation', {state: {cfClicks, ctcClicks, hncClicks}})}>
        Click to go to Recommendation
        </button>
        <p> Welcome to our Cereal Budget App!</p>
        <p>Your total budget is: ${budget}</p>

        <button onClick={() => run(setcfcClicks, 3, cfClicks)}>
        Buy Corn Flakes for $3
        </button>
        <p>You bought {cfClicks} Boxes of Corn Flakes!</p>


        <button onClick={() => run(setctcClicks, 4, ctcClicks)}>
        Buy Cinnamon Toast Crunch for $4
        </button>
        <p>You bought ${ctcClicks} Boxes of Cinnamon Toast Crunch!</p>

        <button onClick={() => run(sethncClickes, 2, hncClicks)}>
        Buy Honey Nut Cheerios for $2
        </button>
        <p>You bought ${hncClicks} Boxes of Honey Nut Cheerios</p>

        </div>

    )
}