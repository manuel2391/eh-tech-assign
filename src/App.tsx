import './App.css'
import Header from './components/header/header'
import { Outlet } from "react-router-dom"

function App() {
  
  const logoOnClicked = () : void =>{
    console.log("logo onClick")
  }
  return (
    <>
      <div className='w-full h-max'>
        <Header logoOnClick={logoOnClicked}/>
        <div className='children-container w-full h-full'>
          <Outlet/>
        </div>
        
      </div>  
    </>
  )
}

export default App
