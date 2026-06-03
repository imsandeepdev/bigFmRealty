import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

 return (
    <div className="w-full min-h-screen">
      <Header/>
      <HomePage />
       <ToastContainer position="top-right" />
    </div>
  );
}

export default App
