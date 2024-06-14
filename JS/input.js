export class Input {
  constructor() {
    this.keys = [];

    document.addEventListener("keydown", (e) => {
      if (!this.keys.includes(e.key.toLowerCase()))
        this.keys.push(e.key.toLowerCase());
    });

    document.addEventListener("keyup", (e) => {
      this.keys.splice(this.keys.indexOf(e.key.toLowerCase()));
    });
  }
}
