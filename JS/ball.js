export class Ball {
  constructor(game) {
    this.game = game;
    this.rad = 20;
    this.x = 200;
    this.y = 200;
    this.vx = 1;
    this.vy = 1;
    this.color = "lime";
    this.display = false;
    this.game.resetting = true;
    this.game.paddleOne.score = 0;
    this.game.paddleTwo.score = 0;
  }
  update(deltatime) {
    if (deltatime == 0) {
      this.game.paddleTwo.score = 0;
      this.game.paddleOne.score = 0;
    }
    if (this.game.resetting) return;
    this.x += this.vx * deltatime;
    this.y += this.vy * deltatime;

    if (this.x + this.rad >= this.game.canvas.width) this.vx *= -1;
    if (this.x - this.rad <= 0) this.vx *= -1;

    if (this.y + this.rad >= this.game.canvas.height) {
      this.game.paddleOne.score++;
      this.display = false;
      this.game.resetting = true;
    }
    if (this.y - this.rad <= 0) {
      this.game.paddleTwo.score++;
      this.display = false;
      this.game.resetting = true;
    }

    if (this.findCollision()) {
      this.vy *= -1;
      this.y += this.vy * deltatime * 4;
    }
  }
  draw(ctx) {
    if (this.display) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  detectCollision(padPos) {
    const dX = Math.abs(this.x - padPos.x);
    const dY = Math.abs(this.y - padPos.y);

    const d = Math.sqrt(dX ** 2 + dY ** 2);

    return d <= this.rad + 30;
  }
  findCollision() {
    if (
      this.detectCollision({
        x: this.game.paddleOne.circle.cX,
        y: this.game.paddleOne.circle.cY,
      })
    ) {
      return true;
    }

    if (
      this.detectCollision({
        x: this.game.paddleTwo.circle.cX,
        y: this.game.paddleTwo.circle.cY,
      })
    ) {
      return true;
    }
  }
}
