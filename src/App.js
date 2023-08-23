import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// 
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  // dark mode enable or not
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // After setting the alert, you can clear it after a certain time if needed.
        setTimeout(() => { 
        setAlert(null);
    }, 900); // This will clear the alert after 5 seconds
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils1 - Light Mode"
      //
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
        setInterval(() => {
        document.title = 'Install is Amazing Mode';
      }, 1500);

    } else {
      setMode("dark");
      showAlert("Dark mode is enabled", "success");
        document.title = "TextUtils1 - Dark Mode"
    }
  };
  return (
    <>
      <Router>
      <Navbar title="TextUtils1" mode={mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />} {/* Display the alert when it exists */}
        <div className="container my-3">
          <Routes> {/* Replace 'Switch' with 'Routes' */}
            <Route exact path="/about" element={<About />} /> {/* Use 'element' for rendering components */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analysis" mode={mode} />} />
          </Routes>
        </div> 
        </Router>
    </>
  );
}
          

export default App;
