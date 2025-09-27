// ===== NEW SLIDESHOW =====
const slideshow = document.getElementById("slideshow");
const slideshowImage = document.querySelector(".slideshow-image");
const countupSection = document.getElementById("countup-section");
const intro = document.getElementById("intro");

const slides = [
  "images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg",
  "images/p5.jpg","images/p6.jpg","images/p7.jpg","images/p8.jpg",
  "images/p9.jpg","images/p10.jpg"
];

let slideIndex = 0;
let loopCount = 0;
const loops = 2;        // how many times to loop through all 10
const slideSpeed = 100; // 0.3s per image

function runSlideshow(){
  slideshowImage.style.backgroundImage = `url('${slides[slideIndex]}')`;
  slideIndex++;
  if(slideIndex >= slides.length){
    slideIndex = 0;
    loopCount++;
  }
  if(loopCount < loops){
    setTimeout(runSlideshow, slideSpeed);
  } else {
    // after final loop -> hide slideshow & start countup
    slideshow.classList.add("hidden");
    countupSection.classList.remove("hidden");
    animateCountUp();
  }
}
runSlideshow();

// ===== Count-UP Days =====
const countUpEl = document.getElementById("countup");
let currentDay = 1;
const targetDay = 27;
const speed = 500; // ms per increment

function animateCountUp(){
  countUpEl.textContent = `Day ${currentDay}`;
  if(currentDay < targetDay){
    currentDay++;
    setTimeout(animateCountUp, speed);
  } else {
    setTimeout(() => {
      countupSection.classList.add("hidden");
      intro.classList.remove("hidden");
    }, 1000);
  }
}

// ===== Start Surprises =====
document.getElementById("startBtn").addEventListener("click", () => {
  intro.classList.add("hidden");
  document.getElementById("surprise-section").classList.remove("hidden");
});

// ===== Surprise Boxes =====
const boxes = document.querySelectorAll(".surprise-box");
const revealArea = document.getElementById("reveal-area");
const revealMsg = document.getElementById("reveal-message");
const revealVid = document.getElementById("reveal-video");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    revealArea.classList.remove("hidden");
    revealMsg.textContent = box.dataset.msg;
    revealVid.src = box.dataset.vid;
    revealVid.play();
  });
});

// ===== Navigation Buttons =====
document.getElementById("nextGallery").addEventListener("click", () => {
  document.getElementById("surprise-section").classList.add("hidden");
  document.getElementById("gallery-section").classList.remove("hidden");
});
document.getElementById("nextMessage").addEventListener("click", () => {
  document.getElementById("gallery-section").classList.add("hidden");
  document.getElementById("message-section").classList.remove("hidden");
});
document.getElementById("nextVideo").addEventListener("click", () => {
  document.getElementById("message-section").classList.add("hidden");
  document.getElementById("video-section").classList.remove("hidden");
});