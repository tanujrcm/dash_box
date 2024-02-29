import logo from "./logo.svg";
import "./App.css";
import Dash_page from "./Dash_page";
import { useState } from "react";

import { Button, ConfigProvider, Space, theme } from "antd";
import { DesignTokens } from "./Helpers/Constants";
function App() {


 const { defaultAlgorithm, darkAlgorithm } = theme;
 const [isDarkMode, setIsDarkMode] = useState(false);

 const handleClick = () => {
  setIsDarkMode((previousValue) => !previousValue);
 };


  return (
    <div className="App">
      <ConfigProvider
        theme={{

          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,

          token: isDarkMode ? DesignTokens.light : DesignTokens.dark,

        }}
      >

        <Button onClick={handleClick}>
        Change Theme to {isDarkMode ? "Light" : "Dark"}
        </Button>
        <Dash_page />
        
      </ConfigProvider>
    </div>
  );
}

export default App;
