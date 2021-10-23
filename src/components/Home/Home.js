import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export const Home= () => {
    //icons
     const card= <FontAwesomeIcon icon={faIdCard} />
     //click event listener
     
    return (
        <main id='hover-effect'>
            <NavLink to ='./initial' className='buttonLink'><h1>DNI <span>{card}</span></h1></NavLink>
        </main>
    )
}