import logo from "./logo.svg";
import "./App.css";
import Dash_page from "./Dash_page";

import { Button, ConfigProvider, Space } from "antd";
function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#F2661D",
            borderRadius: 5,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <Dash_page />
      </ConfigProvider>
    </div>
  );
}

export default App;
