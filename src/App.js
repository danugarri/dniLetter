import {BrowserRouter as Router,Route} from 'react-router-dom'
import React,{ useState } from 'react';
import './App.scss';
import { Initial } from './components/Initial/Initial';
import { TrasnformDni } from './components/TrasnformDni/TrasnformDni';

const App = () => {
   const [dni,setDni]= useState('')
  return (
    <Router>
      <Route  path='/initial'>
        <Initial dni={dni} setDni={setDni}/>
      </Route>
       <Route  path='/transform'>
        <TrasnformDni dni={dni}/>
      </Route>
    </Router>
    
  );
}

export default App;
