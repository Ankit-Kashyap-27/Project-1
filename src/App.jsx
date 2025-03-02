import { useState } from 'react'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isDarkmode, setisDarkmode] = useState(false);
  const [alert, setalert] = useState(null);


  const handleSlide = () => {
    setisDarkmode(!isDarkmode);
    document.body.classList.toggle('Darkmode', !isDarkmode)
    showAlert(isDarkmode ? "Light Mode is Enabled" : "Dark Mode is Enabled")

  }
  const showAlert = (message) => {
    setalert({
      msg: message,
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }




  return (
    <>

      {/* <Router> */}
        <div className="">
          <Navbar title="TestUtils" mode={isDarkmode} handleSlide={handleSlide} />

        </div>
        <div>
          <Alert alert={alert} mode={isDarkmode} />
        </div>

        <div className=" container flex  flex-col items-center  ">
          {/* <Routes> */}

            {/* <Route exact path="/" element={<Textform mode={isDarkmode} showAlert={showAlert} />} /> */}
            <Textform mode={isDarkmode} showAlert={showAlert} />

            {/* <Route exact path="/about" element={<About mode={isDarkmode} />} /> */}
            <About mode={isDarkmode} />

          {/* </Routes> */}
        </div>

      {/* </Router> */}
    </>
  )
}

export default App
