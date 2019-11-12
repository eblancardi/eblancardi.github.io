class Cup {
  constructor() {
    const img = document.createElement('img');

    this.x = 0;

    img.onload = () => {
      console.log('image chargée')
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio;
      
      this.y = H - this.h;
    }
    img.src = "./Images/cup.png";
  };

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveLeft() {
    this.x += -20;
  };

  moveRight() {
    this.x += 20;
  };

  /* crée une méthode qui dit quand je colissionne je remplace l image */

  changeImg(num) {

    this.img.src = "./Images/glace"+num+".png";
  };
};

function random(from, to) {
  return Math.floor(from + Math.random() * (to - from));
};