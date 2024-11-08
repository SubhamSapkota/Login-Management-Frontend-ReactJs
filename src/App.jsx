import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNavlink from './components/MainNavlink/MainNavlink'
import MainRoute from './components/route/MainRoute'

export let GlobalVariableContext = createContext();
function App() {
  let [token, setToken] = useState(localStorage.getItem("token"))
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalVariableContext.Provider value={{token:token, setToken:setToken}}>
      <MainNavlink></MainNavlink>
      <MainRoute></MainRoute>
      </GlobalVariableContext.Provider>
    </div>
  )
}

export default App
