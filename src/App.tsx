import './App.css'
import { BrowserRouter} from 'react-router-dom'
import Rotas from "../src/Components/Router/Routes.tsx"
import { AuthProvider } from './context/LoginContext.tsx'





export default function App(){
  
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}


