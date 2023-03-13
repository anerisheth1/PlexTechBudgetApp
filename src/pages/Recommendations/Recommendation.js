import './Recommendation.css';
import cinnamonToast from './cinnamonToast.jpeg';
import cornFlakes from './cornflakes.jpeg';
import honeyNutCheerios from './honeyNutCheerios.jpeg'
import DataEntry from '../DataEntry/DataEntry';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

// (one must be based off the total money you've spent 
// and the other must be the distribution of the items you've bought)
export default function Recommendation(){
    const navigate  = useNavigate();
    const location = useLocation(); 
    const [budgetCereal, setbudgetCereal] = useState(' WAITING FOR CALCULATIONS '); 
    const [ratioCereal, setratioCereal] = useState(' WAITING FOR CALCULATIONS '); 
    const {cfClicks, budget, ctcClicks, hncClicks} = location.state; 
    console.log('hi')

    function cerealRecs(totalMoney) {
        // console.log('mongrol')
        // setbudgetCereal('honey bunches of oats')
        if (totalMoney > 80){
            setbudgetCereal('honey bunches of oats')
        }
        else if (totalMoney  > 60 ){
            setbudgetCereal('Cinnamon Toast')
        }
        else {
            setbudgetCereal('Corn Flakes')
        }

    }
    function ratioCerealRec(cerealQuantityHoney, cerealQuantityCorn, cerealQuantityCinnamon) {
        const allCereal = cerealQuantityCinnamon+ cerealQuantityCorn + cerealQuantityHoney; 
        console.log(allCereal); 
        const cinnamonRatio = cerealQuantityCinnamon/allCereal;
        console.log('cinnamon ratio',cinnamonRatio); 

        const cornRatio = cerealQuantityCorn/allCereal; 
        console.log( 'cornFlakes ratio',cornRatio); 

        const hunBunRatio = cerealQuantityHoney/allCereal;
        console.log('hunbun', hunBunRatio);
        console.log('hunbun quantity', cerealQuantityHoney);

        const lowestRatio = Math.min(cinnamonRatio, cornRatio, hunBunRatio); 
        console.log(lowestRatio); 
        // console.log('hunbun', hunBunRatio);

        if (hunBunRatio == lowestRatio ){
            setratioCereal('honey bunches of oats')

        }
        else if (cinnamonRatio == lowestRatio ){
            setratioCereal('Cinnamon Toast')
        }
        else {
            setratioCereal('Corn Flakes')
        }
       
    }

    // const [budget, setBudget] = useState(140.69)

    //const { cfClicks, ctcClicks, hncClicks } = location.state;




    return (
        <div>
        <button onClick={() => navigate('/',  {state: {cfClicks, ctcClicks, hncClicks, budget}})}>Click to go to DataEntry</button>
        <p> This is the recommendation page</p>
        <p> Your top picks now based on your ${budget}!</p>



        <button onClick={() => cerealRecs(budget)}>Click to see Recommendations based on Budget</button>
        <p> Based on your current funds we reccomend {budgetCereal} </p>
        <button onClick={() => ratioCerealRec(hncClicks,cfClicks,ctcClicks)}>Click to see Recommendations based on Budget</button>

        <p> Based on your current amount of food we reccomend {ratioCereal} </p>





        <img src={cinnamonToast} alt="Cereal budget" />
        <img src={cornFlakes} alt="cornFlakes" />
        <img src={honeyNutCheerios} alt="nuts" width={300} height={300} />

        

        </div>
    )
}