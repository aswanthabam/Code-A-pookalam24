var canvas;
var size;
var ctx;
var TARGET_WIDTH = 2000;
var pixelSize;
center = { x: 0, y: 0 };
var apSize;
var pad;
const showToast = (message) => {
  return;
  var x = document.getElementById("info");
  x.innerHTML = message;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
const downloadCanvasImage = () => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "pookalam_aswanth_vc_2024.png";
  link.click();
};
const onLoad = async () => {
  showToast("Poovidunu... Kaathiriku! 🌼🌼🌼");
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  var font = document.createElement("link");
  font.href =
    "https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap";
  font.rel = "stylesheet";
  document.head.appendChild(font);
  font.onload = () => {
    document.fonts
      .load("100 1em Handjet")
      .then(draw)
      .catch((error) => {
        console.error("Font loading failed:", error);
      });
  };
};

const draw = () => {
  canvas = document.getElementById("canvas");
  console.log(
    "Canvas loaded. Width: " + canvas.width + " Height: " + canvas.height
  );
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
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawOval(1000, 1000, 1330, 1330, "#7E1E2F");
  drawOval(1000, 1000, 1300, 1300, "#FFFEE9");
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(1000), Y(1000), s(1300), s(1300), 0, 0, Math.PI * 2);
  ctx.clip();

  kuda();
  plate();
  thenga(650, 1615, 1, 1);
  thenga(870, 1615, -1);
  villaku();
  happyOnam();
  ctx.restore();
  poovu(1100, 1720, 1.5);
  poovu(1400, 1720, 1.5);
  poovu(1250, 1790, 2);
  showToast("Poovitu, onashamsakal! 🌼🌼🌼");
  ctx.font = `${70 * pixelSize}px 'Handjet'`; // Set the font size and family
  ctx.fillStyle = "#000"; // Set the fill color
  ctx.textAlign = "center"; // Align text to the center
  ctx.textBaseline = "middle"; // Align the text vertically in the middle
  size = apSize;
  pad = 0;
  pixelSize = size / TARGET_WIDTH;
  // Draw filled text
  ctx.fillText("© aswanthvc.me", X(170), Y(1940));
};

const poovu = (x, y, scale) => {
  drawFlower(x, y, scale * 1.2, "#E68A00", 14);
  drawFlower(x, y, scale, "#FEA22D", 14);
  drawFlower(x, y, scale * 0.7, "#FCD60F", 13);
  drawFlower(x, y, scale * 0.5, "#FFFE5B", 13, "#7F1E2F");
};
const drawFlower = (
  x,
  y,
  scale,
  petalColor = "red",
  numPetals = 14,
  centerColor = "yellow"
) => {
  const petalRadiusX = 20 * scale;
  const petalRadiusY = 40 * scale;
  const centerRadius = 15 * scale;
  const angleIncrement = (Math.PI * 2) / numPetals;

  // Draw petals around the center
  for (let i = 0; i < numPetals; i++) {
    const angle = i * angleIncrement;
    const petalX = x + Math.cos(angle) * (centerRadius + petalRadiusX / 2);
    const petalY = y + Math.sin(angle) * (centerRadius + petalRadiusY / 2);
    drawOval(
      petalX,
      petalY,
      petalRadiusX * 2,
      petalRadiusY / 4,
      petalColor,
      angle
    );
  }

  // Draw center of the flower
  drawOval(x, y, centerRadius, centerRadius, centerColor);
};

const happyOnam = () => {
  drawHalfOval(1000, 0, 1000, 400, "#DBFAFA", Math.PI, Math.PI * 2);
  var size1 = 150 * pixelSize;
  var size2 = 280 * pixelSize;
  offset = 190 * pixelSize;
  ctx.font = `${size1}px 'Handjet'`; // Set the font size and family
  ctx.fillStyle = "#7A2030"; // Set the fill color
  ctx.textAlign = "center"; // Align text to the center
  ctx.textBaseline = "middle"; // Align the text vertically in the middle

  // Draw filled text
  ctx.fillText("HAPPY", canvas.width / 2, canvas.height / 8);

  ctx.font = `${size2}px 'Handjet'`; // Set the font size and family
  ctx.fillStyle = "#E36B12"; // Set the fill color
  ctx.textAlign = "center"; // Align text to the center
  ctx.textBaseline = "middle"; // Align the text vertically in the middle

  // Draw filled text
  ctx.fillText("ONAM", canvas.width / 2, canvas.height / 8 + offset);
};

const villaku = () => {
  drawLine(1250, 1656, 1250, 1100, "#FFC414", 80);
  drawHalfOval(1250, 1256, 70, 30, "#FC9606", Math.PI, Math.PI * 1);
  drawHalfOval(1250, 1256, 70, 30, "#E5880F", Math.PI * 2, Math.PI * 1);
  drawLine(1250, 1656, 1250, 1280, "#FFC414", 80);
  drawLine(1250, 1232, 1250, 1100, "#FFC414", 80);

  drawHalfOval(1250, 960, 40, 250, "#E9E276", Math.PI, Math.PI);

  drawLine(1250, 1100, 1250, 1063, "#FD9506", 90);
  drawHalfOval(1250, 870, 200, 200, "#FFC414", Math.PI * 2.1, Math.PI * 0.8);
  drawLine(1050, 910, 1450, 910, "#FC9606", 50);

  drawHalfOval(1250, 1750, 200, 200, "#FFaf01", Math.PI * 1.1, Math.PI * 0.8);
  drawLine(1050, 1710, 1450, 1710, "#FC9606", 50);
};

const thenga = (x, y, rotation = 1, scale = 1) => {
  drawHalfOval(
    x,
    y,
    140 * scale,
    170 * scale,
    "#6B2E01",
    (Math.PI / -0.6) * rotation
  );
  drawOval(
    x,
    y,
    140 * scale,
    80 * scale,
    "#6B2E01",
    (Math.PI / -1.5) * rotation
  );
  drawOval(x, y, 130 * scale, 70 * scale, "#fff", (Math.PI / -1.5) * rotation);
  drawOval(
    x,
    y,
    120 * scale,
    60 * scale,
    "#E8E2CC",
    (Math.PI / -1.5) * rotation
  );
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(
    X(x),
    Y(y),
    s(120 * scale),
    s(60 * scale),
    (Math.PI / -1.5) * rotation,
    0,
    Math.PI * 2 * rotation
  );
  ctx.clip();
  ctx.beginPath();
  ctx.ellipse(
    X(x),
    Y(y + 70 * scale),
    s(120 * scale),
    s(60 * scale),
    (Math.PI / -1.5) * rotation,
    0,
    Math.PI * 2 * rotation
  );
  ctx.fillStyle = "#EFF0E8";
  ctx.fill();
  ctx.restore();
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
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(645), Y(1100), s(555), s(555), Math.PI / 1.32, 0, Math.PI);
  ctx.clip();

  ctx.strokeStyle = "#FDF94F";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.ellipse(X(645), Y(1200), s(805), s(505), Math.PI / 1.38, 0, Math.PI);
  ctx.stroke();

  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.ellipse(X(700), Y(1480), s(900), s(505), Math.PI / 1.51, 0, Math.PI);
  ctx.stroke();
  ctx.restore();

  drawOval(645, 1100, 555, 166, "#E96912", -Math.PI / 4);
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(645), Y(1100), s(555), s(166), -Math.PI / 4, 0, Math.PI * 2);
  ctx.clip();
  ctx.strokeStyle = "#FD940E";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(X(605), Y(1050), s(555), s(166), -Math.PI / 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "#FD940E";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(X(480), Y(990), s(555), s(166), -Math.PI / 4.2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
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

const drawHalfOval = (
  x,
  y,
  radX,
  radY,
  color,
  rotation = null,
  angle = Math.PI
) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (rotation) {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), rotation, 0, angle);
  } else {
    ctx.ellipse(X(x), Y(y), s(radX), s(radY), 0, 0, angle);
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
window.onresize = onLoad;
