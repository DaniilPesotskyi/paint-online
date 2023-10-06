import Canvas from "./components/Canvas/Canvas";
import SettingBar from "./components/SettingBar/SettingBar";
import ToolBar from "./components/ToolBar/ToolBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <ToolBar />
      <SettingBar />
      <Canvas />
    </>
  );
}

export default App;
