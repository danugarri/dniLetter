import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React,{ useState } from 'react';
import './App.scss';
import { Initial } from './components/Initial/Initial';
import { TrasnformDni } from './components/TrasnformDni/TrasnformDni';
import { Home } from './components/Home/Home';

const App = () => {
   const [dni,setDni]= useState('')
  return (
      <Router>
    <Switch>
      {/*super Important to ad exact, without it the home component is always rendered*/}
      <Route exact path= '/' >
        <Home />
      </Route>
      <Route  path='/initial'>
        <Initial dni= {dni} setDni= {setDni} />
      </Route>
       <Route  path='/transform'>
        <TrasnformDni dni= {dni} />
      </Route>
    </Switch>
      </Router>
    
  );
}

export default App;
