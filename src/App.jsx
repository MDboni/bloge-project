

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ByCategori from './Pages/ByCategori';
import Details from './Pages/Details';

function App() {


  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/byCategory/:categoryID" element={<ByCategori/>}/>
        <Route path="/details/:postID" element={<Details/>}/>
      </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
