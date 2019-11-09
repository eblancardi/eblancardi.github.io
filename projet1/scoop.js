class Scoop {
  constructor(address, x, y){
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

    const imgRatio = img.naturalWidth/img.naturalHeight;

    this.w = 100;
    this.h = this.w/imgRatio;

    this.x = x;
    this.y = y;
  };
  img.src = address;
  };

  draw() {
    if (!this.img) return; 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  hits(cup) {
    return (
      (cup.x+cup.w >= this.x && cup.x <= this.x+this.w)
      &&
      (cup.y <= this.y+this.h && cup.y+cup.h >= this.y)
    );
  }

};

// Fonction d'aide

function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
};
function random(from, to) {
  return Math.floor(from + Math.random()*(to - from));
}

