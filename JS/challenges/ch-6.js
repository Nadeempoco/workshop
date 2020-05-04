// week 4, day 2, challange 3
// Frames Per Second

function frames(minutes, fps) {
  let frames = minutes * fps * 60;
  console.log(minutes + " minutes at " + fps + "fps is " + frames + " frames");
};

frames(1, 1);
frames(10, 1);
frames(10, 25);