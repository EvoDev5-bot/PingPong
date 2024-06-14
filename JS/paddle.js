export class Paddle {
  constructor(game, x, y) {
    this.x = x;
    this.y = y;
    this.game = game;
    this.score = 0;
    this.circle = {
      rad: 30,
      cX: this.x + 30,
      cY: this.y + 30,
    };
    this.handle = {
      h: 50,
      w: 10,
      x: this.x + 30,
      y: this.y + 40,
    };
  }
  update(deltatime) {
    if (this.game.input.keys.includes("d")) this.x += deltatime;
    if (this.game.input.keys.includes("a")) this.x -= deltatime;

    if (this.x < 0) this.x = 0;
    if (this.x + 70 > this.game.canvas.width)
      this.x = this.game.canvas.width - 65;

    this.circle = {
      rad: 30,
      cX: this.x + 30,
      cY: this.y + 30,
    };
    this.handle = {
      h: 50,
      w: 10,
      x: this.x + 30,
      y: this.y + 40,
    };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#DC2626";
    ctx.arc(this.circle.cX, this.circle.cY, this.circle.rad, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(this.handle.x, this.handle.y);
    ctx.rotate((Math.PI / 180) * -30);
    ctx.fillRect(0, 0, this.handle.w, this.handle.h);
    ctx.restore();
  }
}

export class Paddle2 {
  constructor(game, x, y) {
    this.x = x;
    this.y = y;
    this.game = game;
    this.circle = {
      rad: 30,
      cX: this.x + 30,
      cY: this.y + 30,
    };
    this.handle = {
      h: 50,
      w: 10,
      x: this.x + 55,
      y: this.y - 25,
    };
    this.score = 0;
  }
  update(deltatime) {
    if (this.game.input.keys.includes("arrowright")) this.x += 1 * deltatime;
    if (this.game.input.keys.includes("arrowleft")) this.x -= 1 * deltatime;

    if (this.x < 0) this.x = 0;
    if (this.x + 70 > this.game.canvas.width)
      this.x = this.game.canvas.width - 65;

    this.circle = {
      rad: 30,
      cX: this.x + 30,
      cY: this.y + 30,
    };
    this.handle = {
      h: 50,
      w: 10,
      x: this.x + 55,
      y: this.y - 25,
    };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#1E40AF";
    ctx.arc(this.circle.cX, this.circle.cY, this.circle.rad, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(this.handle.x, this.handle.y);
    ctx.rotate((Math.PI / 180) * 30);
    ctx.fillRect(0, 0, this.handle.w, this.handle.h);
    ctx.restore();
  }
}
