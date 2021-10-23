import React from "react";
import { NavLink } from "react-router-dom";
import './TransformDni.scss';

export const TrasnformDni= ({dni}) => {
    
    //ARRAYS
    console.log(dni)
    //ARRAYS
    //const arryRests=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    const arrayLetters=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    const rest=Number(dni)%23;
    console.log(rest);

    for(let i=1;i<22;i++){
        switch(rest){
            default :
            return <div  id='final'>
                <h1> La letra de tu DNI es : </h1>
                    <div id='letter'>{dni+arrayLetters[rest]}</div>
                 <button> <NavLink to ='./initial' className='buttonLink'>Volver</NavLink></button>
                 </div>;
        }
    }
    return (
        <div>
        
        </div>
        
    )
}
