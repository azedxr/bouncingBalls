console.log("hello world");
const canvs = document.getElementById("canvas");
const cnvs = canvs.getContext("2d");

canvs.width = window.innerWidth;
canvs.height = window.innerHeight;

var circles = [];

// Create 100 circles with random positions, speeds, and radius and colors
for (var i = 0; i < 100; i++) {

  var r = 30 * Math.random(); // Random radius between 0 and 30

  circles.push({
    radius: r,
    x: Math.random() * (canvs.width - r * 2) + r,   
    y: Math.random() * (canvs.height - r * 2) + r,  
    mx: (Math.random() * 2 - 1) * 4,
    my: (Math.random() * 2 - 1) * 4,
    color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
  });
}

function animate() {
  requestAnimationFrame(animate);

  cnvs.clearRect(0, 0, canvs.width, canvs.height);

  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];

    // draw circle
    cnvs.beginPath();
    cnvs.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    cnvs.stroke();
    cnvs.fillStyle = c.color;
    cnvs.fill();
    cnvs.closePath();

    // move
    c.x += c.mx;
    c.y += c.my;

    // bounce 
    if (c.x > canvs.width - c.radius || c.x < c.radius) c.mx = -c.mx;
    if (c.y > canvs.height - c.radius || c.y < c.radius) c.my = -c.my;
  }
}

animate();




