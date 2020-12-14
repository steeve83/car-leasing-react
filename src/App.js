import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import "./App.css";
//components
import Home from "./components/pages/Home"; //if Home.js is called index.js
import Leasespecials from './components/pages/Leasespecials';

function App() {
  return (
    <>
   <Route path="/" component={Home} />
   <Route path="/Leasespecials" component={Leasespecials} />
   </>
  );
}

export default App;
