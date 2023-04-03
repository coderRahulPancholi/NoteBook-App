import { ThemeProvider } from "styled-components";
import "./App.css";

import Navbar from "./Commponents/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Singup from "./Pages/Singup";
// import Home from "./Pages/Home";
import Notestate from "./Context/Notestate";
import { Globalcss } from "./Globalcss";
import Loading from "./Commponents/Loading";
import Ihome from "./Pages/Ihome";

function App() {

  const theme = {

  }
  return (
    <Notestate>
      <ThemeProvider theme={theme}>
        <Globalcss/>

      
      <Navbar/>
      <Loading/>
 

    <Ihome/>
    </ThemeProvider>
    </Notestate>
  );
}

export default App;
