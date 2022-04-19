"use strict";
const drawLine = (ctx, p1, p2) => {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
};
var circles = getRandomCircles(5);
const mainLoop = (ctx) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    updateFullCircles(circles);
    ctx.save();
    const lines = getLinesFromFn(getFullFunction(circles));
    for (let i = lines.length - 1; i >= 0; i--) {
        drawLine(ctx, lines[i][0], lines[i][1]);
    }
    ctx.restore();
};
const main = () => {
    const canvas = document.querySelector("canvas#canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("No ctx");
        return;
    }
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const pixelRatio = window.devicePixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
    setInterval(() => {
        mainLoop(ctx);
    }, 167);
};
main();
