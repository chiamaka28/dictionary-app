import "./App.css";
import Main from "./components/Main";
import { useState, useEffect } from "react";


function App() {
  const [theme, setTheme] = useState(null)
  
 useEffect(() => {
  if (window.matchMedia('(prefers-color-scheme : dark)').matches){
    setTheme("dark")
  }else{
    setTheme("light")
  }
 }, [])

 
 useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
 },[theme])
   
 const handleTheme = () =>{
  setTheme(theme === "dark" ? "light" : "dark")
 }
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="my-container ">
        <Main handleTheme={handleTheme} />
      </div>
    </div>
  );
}

export default App;
