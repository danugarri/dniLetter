
import './Initial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Redirect} from "react-router-dom";
import swal from 'sweetalert';
import { useState } from 'react';

export const Initial= ({dni,setDni}) => {
    // handle redirection to the solution
    const [redirection, setRedirection] = useState(false)
    
    //icons
     const card= <FontAwesomeIcon icon={faIdCard} />
     const arrow = <FontAwesomeIcon icon={faAnglesDown} />
     // submit listener
     
     const onHandleSubmit= (event) =>{
         event.preventDefault();
          let dniNumber= event.target.querySelector('input[name="number"]').value;
          if(dniNumber !=='' && dniNumber.length===8){
              setRedirection(true)
              setDni(() => dniNumber) 
          } 
          else{
             swal('No has introducido un DNI Válido')
          } 
         //Reset function
         const reset = () => {
             dniNumber= event.target.querySelector('input[name="number"]').value='';
         }
         reset()
        }
        //redirection with dni set
        
           if(redirection === true) {
           return <Redirect to ="/transform" ></Redirect>
           }  
           else{
               console.log(" el dni no ha cambiado")
           }
     //manage redirection
     const handleClick = () => setRedirection(false)

    return (
        <main>
            <h1>DNI <span>{card}</span></h1>
            <form onSubmit={onHandleSubmit}>
                <label name='number'>Introduce tu Número de DNI sin letra </label>
                <div>
                {arrow}
                </div>
                <input  type='number' htmlFor='number' name='number' placeholder='EJ: 12644553'/>
                {/*nav to transform and trigger event*/}
                <input type='submit' value='Calcular letra' />
                {/*<button><NavLink to = './transform' className='buttonLink' onClick = {handleClick}> Ver</NavLink></button>*/}
                <button><NavLink to = './' className='buttonLink' onClick = {handleClick}>Ir a inicio</NavLink></button>
            </form>
        </main>
    )
}