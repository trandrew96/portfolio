let canvas = document.getElementById("star-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

// Star Object
function Star(x, y, dx, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.radius = radius;

  this.draw = function () {
    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(this.x, this.y, this.radius, this.radius);
  };

  this.update = function () {
    if (this.x > innerWidth) {
      this.x = 0;
    }
    this.x += this.dx;

    this.draw();
  };
}

// Initialize the stars
let starArray = [];
let velocityRange = 0.02;
let sizeRange = 2.5;

// Number of stars = height of canvas
for (let i = 0; i < innerHeight; i += 2) {
  let x = Math.random() * innerWidth;
  let dx = Math.random() * velocityRange;
  let radius = Math.random() * sizeRange;
  starArray.push(new Star(x, i, dx, radius));
}

// Meteor class
function Meteor(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(this.x, this.y, this.radius, this.radius);
    // c.rotate((20 * Math.PI) / 180);
    c.fillStyle = "rgba(255, 255, 255, 1)";
    c.fillRect(this.x, this.y, this.radius * 2, this.radius * 3);
  };

  this.update = function () {
    if (this.x > innerWidth || this.y > innerHeight) {
      this.x = Math.random() * innerWidth * 0.5;
      this.y = 0;
    }
    this.x -= this.dx;
    this.y += this.dx;

    this.draw();
  };
}

// Initialize the meteors
let meteorArray = [];
let meteor_x_velocityRange = 5;
let meteor_y_velocityRange = 5;
sizeRange = 5;

// Array of 3 meteors
for (let i = 0; i < 3; i += 2) {
  let x = Math.random() * innerWidth;
  let dx = Math.random() * meteor_x_velocityRange;
  let y = 50;
  let dy = Math.random() * meteor_y_velocityRange;
  let radius = Math.random() * sizeRange;
  meteorArray.push(new Meteor(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  starArray.forEach((star) => {
    star.update();
  });

  // meteorArray.forEach((meteor) => {
  //   meteor.update();
  // });
}
animate();
