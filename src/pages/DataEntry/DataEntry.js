import './DataEntry.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";

export default function DataEntry(){
    const navigate = useNavigate()
    const totalBudget = 1000;
    const [budget, setBudget] = useState(0)
    const [cfClicks, setcfcClicks] = useState(0);
    const [ctcClicks, setctcClicks] = useState(0);
    const [hncClicks, sethncClickes] = useState(0);
  

    function countClicks(set, cereal) {
        set(cereal);

    }

    function budgetTracker(set, price){
        set(totalBudget-price);
        totalBudget = totalBudget - price;
    }
        
    function run(set, price, click){
        countClicks(set, price);
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
        <p>You bought ${cfClicks} of Corn Flakes!</p>


        <button onClick={() => run(setctcClicks, 4, ctcClicks)}>
        Buy Cinnamon Toast Crunch for $4
        </button>
        <p>You bought ${ctcClicks} of Cinnamon Toast Crunch!</p>

        <button onClick={() => run(sethncClickes, 2, hncClicks)}>
        Buy Honey Nut Cheerios for $2
        </button>
        <p>You bought ${hncClicks} of Honey Nut Cheerios</p>

        </div>

    )
}