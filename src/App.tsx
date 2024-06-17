import { BrowserRouter } from 'react-router-dom'
import './App.css'
// import Banner from './Components/Banner/Banner'
// import Card from './Components/Card/Card'
// import { Header } from './Components/Header/Header'

import MyRouter from './Components/Routes/Routes'





export default function App(){
  

  return (
    <>
      <div>
        <BrowserRouter>
          <MyRouter/>
        </BrowserRouter>
      </div>
    </>
  )
}


