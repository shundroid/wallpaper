(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var videos = ["Razer.mp4", "miku.mp4"];
  var videoElements = videos.map(function(video) {
    var e = document.createElement("video");
    e.src = video;
    e.addEventListener("ended", play);
    return e;
  });
  var index = -1;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function play() {
    if(++index >= videos.length){
      index = 0;
    }
    var element = videoElements[index];
    ctx.globalAlpha = 0;
    element.play();
  }
  play();

  function tick() {
    if(ctx.globalAlpha < 1){
      ctx.globalAlpha += 0.01;
    }
    ctx.drawImage(videoElements[index], 0, 0, canvas.width, canvas.height);
    setTimeout(tick, 50);
  }
  tick();
})();
