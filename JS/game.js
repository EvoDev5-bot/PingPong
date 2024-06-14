import { Ball } from "./ball.js";
import { Input } from "./input.js";
import { Paddle, Paddle2 } from "./paddle.js";
import { displayStatusText } from "./utils.js";

export class Game {
  constructor() {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    [this.canvas.width, this.canvas.height] = [600, 900];
    this.lastTime = 0;
    this.paddleOne = new Paddle(this, 100, this.canvas.height - 100);
    this.paddleTwo = new Paddle2(this, 100, 30);
    this.input = new Input();
    this.ball = new Ball(this);
    this.frameCounter = 0;
    this.resetInterval = 5000;
    this.scoreInterval = 3000;
    this.resetting = false;
    this.firstReset = true;
  }

  update(timestamp) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const deltatime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    [this.paddleOne, this.paddleTwo, this.ball].forEach((obj) => {
      obj.update(deltatime);
    });
    [this.paddleOne, this.paddleTwo, this.ball].forEach((obj) => {
      obj.draw(this.ctx);
    });

    if (this.resetting) {
      this.reset(deltatime);
    }

    if (deltatime == 0) {
      this.paddleOne.score = 0;
      this.paddleTwo.score = 0;
    }
  }
  reset(deltatime) {
    this.frameCounter += deltatime;

    if (this.firstReset) {
      this.firstReset = false;
      if (this.paddleTwo.score == 1) this.paddleOne.score = 0;
      else this.paddleOne.score = 1;
    }

    if (this.frameCounter >= this.scoreInterval) {
      this.ball.display = true;
      this.ball.x = this.canvas.width / 2;
      this.ball.y = this.canvas.height / 2;
      this.ball.vx = 0;
      this.ball.vy = 0;
      if (this.frameCounter >= this.resetInterval) {
        this.ball.vx = Math.random() >= 0.5 ? 0.52 : -0.62;
        this.ball.vy = Math.random() >= 0.5 ? 0.38 : -0.38;
        this.frameCounter = 0;
        this.resetting = false;
        console.log(`${this.paddleOne.score}\n${this.paddleTwo.score}`);
      }
    } else {
      displayStatusText(this);
    }
  }
}
