import "./App";
import { GlobalStyles } from "./styles/global";
import React from "react";
import { HomePageProvider } from "./contexts/homePageContext";
import { HomePage } from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <HomePageProvider>
        <HomePage/>
      </HomePageProvider>
    </div>
  );
}

export default App;
