import css from "./SettingBar.module.css";

// import toolState from "../../store/toolState";

import { observer } from "mobx-react-lite";

const SettingBar = observer(() => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <ul className={css.list}></ul>
      </div>
    </div>
  );
});

export default SettingBar;
