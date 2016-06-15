var canvas;
var ctx;

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  draw(0,0);

  canvas.addEventListener('click', function() {
    //Start spinning the wheel :D
    console.log("ayy lmao");
    var done = false;
    var x = 0;

    function f(){
      if(!done){
        console.log("Wow!");
        x+=0.2;
        if(x > Math.PI*2){
          x = Math.PI*2;
          done = true;
          window.location = "wheel_confirm.html";
        }
        draw(Math.sin(x) * 16, 0);
        requestAnimationFrame(f);
      }
    }
    f();
  });
};

function draw(x, y){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(canvas.width / 2 + x,canvas.height /2 +y,canvas.width/2 - 16, 0,Math.PI*2,true); // Outer circle
  ctx.fill();
}
