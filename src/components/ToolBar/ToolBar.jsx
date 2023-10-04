import css from "./ToolBar.module.css";

import Icon from "../Icon";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import canvasState from "../../store/canvasState";

const ToolBar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <ul className={css.toolsList}>
          <li className={css.toolItem}>
            <button
              type="button"
              className={css.toolBtn}
              onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            >
              <Icon id={"brush"} className={css.icon} />
            </button>
          </li>
          <li className={css.toolItem}>
            <button type="button" className={css.toolBtn}>
              <Icon id={"erase"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button className={css.toolBtn}>
              <Icon id={"rectangle"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button className={css.toolBtn}>
              <Icon id={"circle"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button className={css.toolBtn}>
              <Icon id={"line"} className={css.icon} />
            </button>
          </li>
        </ul>
        <ul className={css.controlsList}>
          <li className={css.controlsItem}>
            <button type="button" className={css.controlsBtn}>
              <Icon id={"arrow"} className={css.icon} />
            </button>
          </li>
          <li className={css.controlsItem}>
            <button type="button" className={css.controlsBtn}>
              <Icon id={"arrow"} className={css.icon} />
            </button>
          </li>
          <li className={css.controlsItem}>
            <button type="button" className={css.controlsBtn}>
              <Icon id={"arrow"} className={css.icon} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToolBar;
