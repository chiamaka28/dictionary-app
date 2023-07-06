import "./App.css";
import Main from "./components/Main";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  

  const handleTheme = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);

    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  return (
    <div className={`min-h-screen w-full dark:bg-black  ${
      darkMode && 'dark'
    }`}>
      <div className="my-container ">
        <Main  handleTheme={handleTheme}/>
      </div>
    </div>
  );
}

export default App;
