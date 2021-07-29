const progress = document.querySelector('#progress');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  // it will change the color of each circle base on all the circles that their index is less than or equle the currentActive
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  // need to change the color of the line between the circle until the circle with index = currnetActive
  const actives = document.querySelectorAll('.active');

  // in style.css, the width of the line between circles is based on percenage, so that we should calculate the percentage of the progress
  // calculation: length of active circle divide by all the length of circles array multiple by 100 will give you a number that you can use as a percetage of the width of the progress line. -1 will help the line to be shown in a correct width
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 +'%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}