icon = document.querySelector("#icon");
let i = 0;
function rotateIcon() {
  icon.style.transform = `rotate(${map(Math.sin(i), -1, 1, -20, 20)}deg)`;
  i += 0.0025;
}

function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input;
}
function map(current, in_min, in_max, out_min, out_max) {
  const mapped =
    ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

setInterval(rotateIcon, 1);
