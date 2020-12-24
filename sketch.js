let car, wall;
let weight, speed;
let deformation;

function setup() {
  createCanvas(1000, 500);

  weight = Math.round(random(800, 1800));
  speed = Math.round(random(50, 80));

  deformation = Math.round(((0.5 * weight * speed * speed) / 22500));

  car = createSprite(50, 200, 40, 40);
  wall = createSprite(900, 250, 50, 250);

  console.log(weight, speed);

  wall.shapeColor = "red";
  car.depth = wall.depth;
  car.depth += 1;
  car.shapeColor = "white";
  car.velocityX = speed;
  console.log(deformation);
}

function draw() {
  background("black");

  if (isTouching()) {
    car.velocityX = 0;
    if (deformation < 100) {
      car.shapeColor = "green";
    }
    if ((deformation < 180 && deformation > 100) || deformation === 180 || deformation === 100) {
      car.shapeColor = "yellow";
    }
    if (deformation > 180) {
      car.shapeColor = "red";
    }
  }

  drawSprites();
}

function isTouching() {
  if (car.x - wall.x < wall.width / 2 + car.width / 2
    && wall.x - car.x < wall.width / 2 + car.width / 2
    && car.y - wall.y < wall.height / 2 + car.height / 2
    && wall.y - car.y < wall.height / 2 + car.height / 2) {
    return true;
  } else {
    return false;
  }
}