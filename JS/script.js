import { Game } from "./game.js";

window.addEventListener("load", function () {
  const game = new Game();
  const animate = (timestamp) => {
    game.update(timestamp);
    requestAnimationFrame(animate);
  };

  animate(0);
});
