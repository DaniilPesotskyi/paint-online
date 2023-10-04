import css from "./Canvas.module.css";

import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className={css.wrap}>
      <canvas ref={canvasRef} width={1090} height={730} />
    </div>
  );
});

export default Canvas;
