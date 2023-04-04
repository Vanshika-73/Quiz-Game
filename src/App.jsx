import React from "react";
import Welcome from "./components/Welcome";
import Questions from './components/Question'
import Select_category from './components/Select_category'
import {Routes,Route} from 'react-router-dom';

function App(){
  
  return(<div>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/category" element={<Select_category />} />
        <Route path="/category/:id" element={<Questions />} />
      </Routes>
  </div>)

}
export default App;