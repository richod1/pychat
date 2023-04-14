import { useState } from 'react'
import AuthPage from './components/AuthPage'
import ChatPage from './components/ChatPage'
import './App.css'

function App() {
  const [user,setUser]=useState(undefined)

  if(!user){
    return <AuthPage onAuth={(user)=>setUser(user)}/>
  }else{
    return <ChatPage user={user}/>
  }
}

export default App
