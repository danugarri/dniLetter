
import './Initial.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export const Initial= ({dni,setDni}) => {

    
    //icons
     const card= <FontAwesomeIcon icon={faIdCard} />
     const arrow = <FontAwesomeIcon icon={faAnglesDown} />
     // submit listener
     
     const onHandleSubmit= (event) =>{
         event.preventDefault();
          let dniNumber= event.target.querySelector('input[name="number"]').value;
          dniNumber !=='' && Number(dniNumber===8) ? setDni(() => dniNumber) : alert('No has introducido un DNI Válido')
         //Reset function
         const reset = () => {
             dniNumber= event.target.querySelector('input[name="number"]').value='';
         }
         reset()
        }

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
                <input type='submit' value='Calcular letra'/>
                <button><NavLink to = './transform' className='buttonLink'> Ver</NavLink></button>
                <button><NavLink to = './home' className='buttonLink'>Ir a inicio</NavLink></button>
            </form>
        </main>
    )
}