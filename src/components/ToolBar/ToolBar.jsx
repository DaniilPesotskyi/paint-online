import css from "./ToolBar.module.css";

import cn from "classnames";

import toolState from "../../store/toolState";
import canvasState from "../../store/canvasState";

import Icon from "../Icon";

import Brush from "../../tools/Brush";
import Eraser from "../../tools/Eraser";
import Rectangle from "../../tools/Rectangle";
import Circle from "../../tools/Circle";
import Line from "../../tools/Line";

import { observer } from "mobx-react-lite";

const ToolBar = observer(() => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <ul className={css.toolsList}>
          <li className={css.toolItem}>
            <button
              type="button"
              className={cn(css.toolBtn, {
                [css.active]: toolState.getTool() instanceof Brush,
              })}
              onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            >
              <Icon id={"brush"} className={css.icon} />
            </button>
          </li>
          <li className={css.toolItem}>
            <button
              type="button"
              className={cn(css.toolBtn, {
                [css.active]: toolState.tool instanceof Eraser,
              })}
              onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
            >
              <Icon id={"erase"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button
              className={cn(css.toolBtn, {
                [css.active]: toolState.getTool() instanceof Rectangle,
              })}
              onClick={() =>
                toolState.setTool(new Rectangle(canvasState.canvas))
              }
            >
              <Icon id={"rectangle"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button
              className={cn(css.toolBtn, {
                [css.active]: toolState.getTool() instanceof Circle,
              })}
              onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
            >
              <Icon id={"circle"} className={css.icon} />
            </button>
          </li>
          <li type="button" className={css.toolItem}>
            <button
              className={cn(css.toolBtn, {
                [css.active]: toolState.getTool() instanceof Line,
              })}
              onClick={() => toolState.setTool(new Line(canvasState.canvas))}
            >
              <Icon id={"line"} className={css.icon} />
            </button>
          </li>
        </ul>
        <ul className={css.controlsList}>
          <li className={css.controlsItem}>
            <button
              type="button"
              className={css.controlsBtn}
              onClick={() => canvasState.undo()}
            >
              <Icon id={"arrow"} className={css.icon} />
            </button>
          </li>
          <li className={css.controlsItem}>
            <button
              type="button"
              className={css.controlsBtn}
              onClick={() => canvasState.redo()}
            >
              <Icon id={"arrow"} className={css.icon} />
            </button>
          </li>
          <li className={css.controlsItem}>
            <button
              type="button"
              className={css.controlsBtn}
              onClick={() => canvasState.reset()}
            >
              <Icon id={"reset"} className={css.iconReset} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ToolBar;
