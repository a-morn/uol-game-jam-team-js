import "reset-css";
import "./style.css";

import * as p5 from "p5";

const root = document.documentElement;
const WIDTH = root.clientWidth;
const HEIGHT = root.clientHeight;
const SPEED = 10;

let x = Math.floor(WIDTH / 2);
let y = Math.floor(HEIGHT / 2);

const P5 = new p5((sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(WIDTH, HEIGHT);
    sketch.frameRate(60);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.textSize(12);
    sketch.text(
      'Placeholder "game", use arrow keys to move around',
      WIDTH / 2 - 100,
      100,
      200
    );
    sketch.textAlign(sketch.CENTER, sketch.TOP);
    sketch.fill(255);
    sketch.square(x, y, 10, 10);
  };

  sketch.keyPressed = () => {
    switch (sketch.keyCode) {
      case 37:
        x -= SPEED;
        break;
      case 39:
        x += SPEED;
        break;
      case 38:
        y -= SPEED;
        break;
      case 40:
        y += SPEED;
        break;
    }
  };
}, document.getElementById("p5"));
