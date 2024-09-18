var canvas;
var size;
var ctx;
var TARGET_WIDTH = 2000;
var pixelSize;
center = { x: 0, y: 0 };
var apSize;
var pad;
const onLoad = () => {
  canvas = document.getElementById("canvas");
  console.log(window);
  width = window.innerWidth;
  height = window.innerHeight;
  if (canvas == null) {
    alert(
      "Hmm! my work is not working here, \n  dont wory, contact me i will help you to figure out whats wrong with you. (yeah, the issue is not from my side"
    );
    return;
  }
  size = (width > height ? height : width) - 30;
  apSize = size;
  canvas.width = size;
  canvas.height = size;
  pad = size * 0.15; // size * 0.25;
  size *= 0.7; // 0.5;
  pixelSize = size / TARGET_WIDTH;
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawOval(1000, 1000, 1300, 1300, "#FFFEE9");
  kuda();
  plate();
  console.log(
    "Canvas loaded. Width: " + canvas.width + " Height: " + canvas.height
  );
};

const plate = () => {
  drawOval(1000, 1750, 600, 112, "#D96E06"); // 15
  drawOval(1000, 1680, 695, 157, "#ffb200");
  drawOval(1000, 1680, 675, 137, "#FCE72C"); // 20
  drawOval(1000, 1680, 665, 127, "#ffb200"); // 10
  drawOval(1000, 1680, 650, 112, "#D96E06"); // 15
  drawOval(1000, 1680, 640, 102, "#F4C221"); // 10
};

const kuda = () => {
  drawHalfOval(645, 1100, 555, 555, "#FFC414", Math.PI / 1.32);
  drawOval(645, 1100, 555, 166, "#E96912", -Math.PI / 4);
  drawLine(1170, 1565, 510, 995, "#6B310C", 37);
};
const s = (x) => x * pixelSize;
const X = (x) => s(x) + pad;
const Y = (y) => s(y) + pad;

const drawOval = (x, y, radX, radY, color, rotation = null) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (rotation) {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), rotation, 0, Math.PI * 2);
  } else {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), 0, 0, Math.PI * 2);
  }
  ctx.fill();
};
const drawHalfOval = (x, y, radX, radY, color, rotation = null) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (rotation) {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), rotation, 0, Math.PI);
  } else {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), 0, 0, Math.PI);
  }
  ctx.fill();
};

const drawLine = (
  startX,
  startY,
  endX,
  endY,
  strokeColor = "black",
  lineWidth = 1
) => {
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = s(lineWidth);
  ctx.beginPath();
  ctx.moveTo(X(startX), Y(startY));
  ctx.lineTo(X(endX), Y(endY));
  ctx.stroke();
};

window.onload = onLoad;
