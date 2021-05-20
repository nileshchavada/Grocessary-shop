import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';
import Home from './screens/Home';
import Product from './screens/Product';
import Cart  from './screens/Cart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {DataProvider} from './GlobalState'
import MainPages from './Components/mainpages/Pages'

function App() {
  const [sideToggle,setSideToggle]= useState(false);
     return (
       <div className="App">
         <DataProvider>
           <Router>
             <Navbar Click ={()=>setSideToggle(true)}/> 
             <MainPages />
             <Switch>
               <Route exact path="/" exact component={Home} />
              {/* <Route path="/Register" exact component= {Register} />
              <Route path="/Login" exact component={Login} /> */}
              <Route exact path="/product/:id" exact component={Product} />
              <Route exact path="/Cart" exact component={Cart} />
            </Switch>
           <Footer/> 
        </Router>
      </DataProvider>

      <Router>
      
      </Router>
    </div>
  );
}

export default App;