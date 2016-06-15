var canvas;
var ctx;
var vid;


function redraw(){
  ctx.drawImage(vid, 0,0,canvas.width, canvas.height);
  if(vid.paused){
    ctx.fillStyle = "black";
    ctx.fillRect(canvas.width / 2 - 10 + 4, canvas.height / 2 - 20 + 4, 5,40);
    ctx.fillRect(canvas.width / 2 + 5 + 4, canvas.height / 2 - 20 + 4, 5,40);
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width / 2 - 10, canvas.height / 2 - 20, 5,40);
    ctx.fillRect(canvas.width / 2 + 5, canvas.height / 2 - 20, 5,40);
  }
  requestAnimationFrame(redraw);
}

window.onload = function(){
  alert('This does work however');
  canvas = document.getElementById('videocanvas');
  vid = document.getElementById('video');
  ctx = canvas.getContext('2d');

  redraw();

  requestAnimationFrame(redraw);

  canvas.addEventListener('click', function() {
    if(vid.paused){
      vid.play();
    }else{
      vid.pause();
    }
  });
  /*
  video.addEventListener('play', function () {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
          redraw();
          setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
}, 0);*/
};
