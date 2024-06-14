export function displayStatusText(game) {
  game.ctx.textAlign = "center";
  game.ctx.font = "40px sans-serif";
  game.ctx.fillStyle = "gray";
  game.ctx.fillText(
    `Player One's Score: ${game.paddleOne.score - 1}`,
    game.canvas.width / 2 - 20,
    game.canvas.height / 2 - 20
  );
  game.ctx.fillStyle = "black";
  game.ctx.fillText(
    `Player One's Score: ${game.paddleOne.score - 1}`,
    game.canvas.width / 2 - 18,
    game.canvas.height / 2 - 18
  );

  game.ctx.fillStyle = "gray";
  game.ctx.fillText(
    `Player Two's Score: ${game.paddleTwo.score}`,
    game.canvas.width / 2 + 20,
    game.canvas.height / 2 + 20
  );
  game.ctx.fillStyle = "black";
  game.ctx.fillText(
    `Player Two's Score: ${game.paddleTwo.score}`,
    game.canvas.width / 2 + 22,
    game.canvas.height / 2 + 22
  );
}
