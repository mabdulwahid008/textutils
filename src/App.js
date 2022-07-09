import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type, 
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
        setMode('dark');
        setModeText('Disable DarkMode');
        document.body.style.backgroundColor = '#000124';
        showAlert("Enabled Dark Mode", "success");
      }
    else{
        setMode('light'); 
        setModeText('Enable DarkMode');
        document.body.style.backgroundColor = '#e8dbff';
        showAlert("Disabled Dark Mode", "success");
      }  
  }
  return (
    <>
      <Router>
            <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
            <div className="container my-2">
            <Alert alert={alert}/>
              <Routes>
                    <Route path="/about" element={<About mode={mode}/>}/><Route path="/" element={<TextForm heading1="Enter Text to Analyze" heading2="Your Analyzed Text" mode={mode}/>}/>
                    <Route path="/textutils" element={<TextForm heading1="Enter Text to Analyze" heading2="Your Analyzed Text" mode={mode}/>}/>
              </Routes>
            </div>  
            <Footer mode={mode}/>
      </Router>      
    </>
  );
}

export default App;
