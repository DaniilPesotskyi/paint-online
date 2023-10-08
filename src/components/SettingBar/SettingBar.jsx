import css from "./SettingBar.module.css";

import toolState from "../../store/toolState";

import {
  Brush,
  Eraser,
  RectangleFilled,
  CircleFilled,
  Line,
  Rectangle,
  Circle,
} from "./../../tools";

import { observer } from "mobx-react-lite";

const SettingBar = observer(() => {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        {toolState.getTool() instanceof Brush && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Width
              </label>
              <input
                className={css.inputRange}
                id="width"
                type="range"
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
          </>
        )}
        {toolState.getTool() instanceof Eraser && (
          <div className={css.field}>
            <label className={css.label} htmlFor="width">
              Width
            </label>
            <input
              className={css.inputRange}
              id="width"
              type="range"
              min={1}
              max={20}
              defaultValue={1}
              onChange={(e) => toolState.setStrokeWidth(e.target.value)}
            />
          </div>
        )}
        {toolState.getTool() instanceof RectangleFilled && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Fill color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setFillColor(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Stroke color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Stroke width
              </label>
              <input
                id="width"
                type="range"
                className={css.inputRange}
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
          </>
        )}
        {toolState.getTool() instanceof CircleFilled && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Fill color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setFillColor(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Stroke color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Stroke width
              </label>
              <input
                id="width"
                type="range"
                className={css.inputRange}
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
          </>
        )}
        {toolState.getTool() instanceof Line && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Width
              </label>
              <input
                className={css.inputRange}
                id="width"
                type="range"
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
          </>
        )}
        {toolState.getTool() instanceof Rectangle && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Stroke width
              </label>
              <input
                className={css.inputRange}
                id="width"
                type="range"
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Stroke color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
          </>
        )}
        {toolState.getTool() instanceof Circle && (
          <>
            <div className={css.field}>
              <label className={css.label} htmlFor="width">
                Stroke width
              </label>
              <input
                className={css.inputRange}
                id="width"
                type="range"
                min={1}
                max={20}
                defaultValue={1}
                onChange={(e) => toolState.setStrokeWidth(e.target.value)}
              />
            </div>
            <div className={css.field}>
              <label className={css.label} htmlFor="color">
                Stroke color
              </label>
              <input
                className={css.inputColor}
                id="color"
                type="color"
                onChange={(e) => toolState.setStrokeColor(e.target.value)}
              />
            </div>
          </>
        )}
        <ul className={css.list}></ul>
      </div>
    </div>
  );
});

export default SettingBar;
