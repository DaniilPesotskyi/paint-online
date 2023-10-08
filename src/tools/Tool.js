export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
    this.resetParams();
  }

  set fillColor(color) {
    this.ctx.fillStyle = color;
  }

  set strokeColor(color) {
    this.ctx.strokeStyle = color;
  }

  set strokeWidth(width) {
    this.ctx.lineWidth = width;
  }

  resetParams() {
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = "black";
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
