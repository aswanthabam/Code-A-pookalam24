var canvas;
var size;
var ctx;
var TARGET_WIDTH = 2000;
var pixelSize;
center = { x: 0, y: 0 };
var apSize;
var pad;
const showToast = (message) => {
  // return;
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

function drawCircleWithDots(
  centerX,
  centerY,
  radius,
  numDots,
  dotRadius,
  color1,
  color2
) {
  const angleIncrement = (2 * Math.PI) / numDots;
  rotationAngle = Math.PI / 0;
  rotationInterval = Math.PI / numDots;
  for (let i = 0; i < numDots; i++) {
    const angle = i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    // Alternate between color1 and color2
    ctx.fillStyle = i % 2 === 0 ? color1 : color2;
    ctx.strokeStyle = i % 2 === 0 ? color1 : color2;
    ctx.lineWidth = dotRadius * 0.33;

    // Draw the dot
    rotationAngle += rotationInterval;
    // ctx.save();

    // Move the canvas origin to the center of the arc
    // ctx.translate(x, y);
    ctx.beginPath();
    ctx.rotate(rotationAngle);
    ctx.arc(x, y, dotRadius, 0, 1 * Math.PI, false);
    ctx.stroke();
    // ctx.restore();
    // if (i >= numDots - 10) {
    // } else {
    //   ctx.arc(x, y, dotRadius, 0, 2 * Math.PI);
    //   ctx.fill();
    // }
  }
}

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
  ctx = canvas.getContext("2d");
  pad = 0.15;
  size *= 0.7;
  pixelSize = size / TARGET_WIDTH;

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  pad = apSize * 0.25; // size * 0.25;
  size = apSize * 0.5; // 0.5;
  pixelSize = size / TARGET_WIDTH;

  drawOval(1000, 1000, 1750, 1750, "#7E1E2F");
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(1000), Y(1000), s(1750), s(1750), 0, 0, Math.PI * 2);
  ctx.clip();
  colors = ["#FFFEE9", "grey", "red", "green", "pink", "blue"];
  ci = 0;
  drawCircleWithDots(
    X(1000),
    Y(1000),
    s(1330),
    100,
    s(500),
    colors[ci],
    colors[ci + 1]
  );
  ctx.restore();
  // return;
  // drawOval(2250, 1000, 500, 500, "red");

  drawOval(1000, 1000, 1330, 1330, "#7E1E2F");
  drawOval(1000, 1000, 1300, 1300, "#FFFEE9");
  drawOval(1000, 1000, 1200, 1200, "#FFF");
  drawOval(1000, 1000, 1100, 1100, "#FFFEE9");
  drawOval(1000, 1000, 1000, 1000, "#FFF");
  drawOval(1000, 1000, 900, 900, "#FFFEE9");
  drawOval(1000, 1000, 800, 800, "#FFF");
  drawOval(1000, 1000, 700, 700, "#FFFEE9");
  drawOval(1000, 1000, 600, 600, "#FFF");
  drawOval(1000, 1000, 500, 500, "#FFFEE9");
  drawOval(1000, 1000, 400, 400, "#FFF");
  drawOval(1000, 1000, 300, 300, "#FFFEE9");
  drawOval(1000, 1000, 200, 200, "#FFF");
  drawOval(1000, 1000, 100, 100, "#FFFEE9");
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
  poovu(1100, 1720, 2);
  poovu(1400, 1720, 1.5);
  // poovu(1250, 1790, 2);
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
  ctx.fillText("HAPPY", size, size / 2.14);

  ctx.font = `${size2}px 'Handjet'`; // Set the font size and family
  ctx.fillStyle = "#E36B12"; // Set the fill color
  ctx.textAlign = "center"; // Align text to the center
  ctx.textBaseline = "middle"; // Align the text vertically in the middle

  // Draw filled text
  ctx.fillText("ONAM", size, size / 2.1 + offset);
};

const villaku = () => {
  // draw stand and base
  drawHalfOval(1250, 1256, 70, 30, "#FC9606", Math.PI, Math.PI * 1);
  drawHalfOval(1250, 1256, 70, 30, "#E5880F", Math.PI * 2, Math.PI * 1);
  drawLine(1250, 1656, 1250, 1280, "#FDD615", 80);
  drawLine(1250, 1232, 1250, 1100, "#FDD615", 80);
  drawLine(1270, 1656, 1270, 1280, "#FFC414", 40);
  drawLine(1270, 1232, 1270, 1100, "#FFC414", 40);
  // draw villaku top
  drawLine(1250, 1100, 1250, 1063, "#FD9506", 90);
  drawHalfOval(1250, 940, 200, 130, "#FDD516", Math.PI * 2, Math.PI);
  ctx.save();
  ctx.ellipse(X(1250), Y(940), s(200), s(130), Math.PI * 2, 0, Math.PI);
  ctx.clip();
  drawLine(1050, 1250, 1450, 940, "#FFC414", 100);
  ctx.restore();
  drawLine(1050, 940, 1450, 940, "#FC9606", 50);

  // draw circle on top of the villaku
  drawOval(1250, 920, 15, 200, "#FFC414", Math.PI / 2);
  drawOval(1250, 920, 5, 170, "#E38911", Math.PI / 2);
  // draw the center kuthu vilakku
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(1250), Y(760), s(170), s(170), Math.PI / 2, 0, Math.PI * 2);
  ctx.clip();
  drawHalfOval(1250, 950, 25, 200, "#E9E276", Math.PI, Math.PI);
  ctx.restore();
  // draw the bottom kuthu vilakku
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
  drawOval(1100, 1750, 600, 112, "#D96E06"); // 15
  drawOval(1100, 1680, 695, 157, "#ffb200");
  drawOval(1100, 1680, 675, 137, "#FCE72C"); // 20
  drawOval(1100, 1680, 665, 127, "#ffb200"); // 10
  drawOval(1100, 1680, 650, 112, "#D96E06"); // 15
  drawOval(1100, 1680, 640, 102, "#F4C221"); // 10
};

const kuda = () => {
  drawHalfOval(745, 1100, 555, 555, "#FFC414", Math.PI / 1.32);
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(745), Y(1100), s(555), s(555), Math.PI / 1.32, 0, Math.PI);
  ctx.clip();

  ctx.strokeStyle = "#FDF94F";
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.ellipse(X(745), Y(1200), s(805), s(505), Math.PI / 1.38, 0, Math.PI);
  ctx.stroke();

  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.ellipse(X(800), Y(1480), s(900), s(505), Math.PI / 1.51, 0, Math.PI);
  ctx.stroke();
  ctx.restore();

  drawOval(745, 1100, 555, 166, "#E96912", -Math.PI / 4);
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(X(745), Y(1100), s(555), s(166), -Math.PI / 4, 0, Math.PI * 2);
  ctx.clip();
  ctx.strokeStyle = "#FD940E";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(X(705), Y(1050), s(555), s(166), -Math.PI / 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "#FD940E";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(X(580), Y(990), s(555), s(166), -Math.PI / 4.2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  drawLine(1270, 1565, 620, 995, "#6B310C", 37);
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
