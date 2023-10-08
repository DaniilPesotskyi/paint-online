import css from "./App.module.css";

import Canvas from "./components/Canvas/Canvas";
import SettingBar from "./components/SettingBar/SettingBar";
import ToolBar from "./components/ToolBar/ToolBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className={css.app}>
        <ToolBar />
        <SettingBar />
        <Canvas />
      </div>
      <div className={css.unavailable}>
        <h1 className={css.title}>Oops...</h1>
        <p className={css.error}>
          Unfortunately this application is not available for phones and tablets
        </p>
        <p className={css.solution}>To try it out, use a suitable device.</p>
      </div>
    </>
  );
}

export default App;
