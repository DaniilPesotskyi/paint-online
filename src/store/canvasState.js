import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  undoList = [];
  redoList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getUndoList() {
    return this.undoList;
  }

  getRedoList() {
    return this.redoList;
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  undo() {
    let ctx = this.canvas.getContext("2d");
    if (this.undoList.length > 0) {
      let dataURL = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }

  redo() {
    let ctx = this.canvas.getContext("2d");
    if (this.redoList.length > 0) {
      let dataURL = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }

  reset() {
    let ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.redoList = [];
    this.undoList = [];
  }
}

export default new CanvasState();
