// selectors
const textAreaElement = document.querySelector(".word-counter-textarea");
// console.log(textAreaElement);

const wordCounter = document.querySelector(".words");
const characterCounter = document.querySelector(".characters");
const twitterCounter = document.querySelector(".twitter");
const linkedinCounter = document.querySelector(".linkedin");
// let warning = document.querySelector(".warning");

const wordCounterHandler = () => {
  // determine number of words
  wordCounter.innerHTML = textAreaElement.value.split(" ").length;
  if (textAreaElement.value.length === 0) {
    wordCounter.innerHTML = 0;
  }

  // determine number of characters
  characterCounter.innerHTML = textAreaElement.value.split("").length;

  // twitter counter limit set
  twitterCounter.innerHTML = 250 - textAreaElement.value.split(" ").length;

  if (twitterCounter.innerHTML < 0) {
    document.querySelector(".warning1").style.display = "block";
  } else {
    document.querySelector(".warning1").style.display = "none";
  }

  // Warning setTimeout
  setTimeout(() => {
    document.querySelector(".warning1").style.display = "none";
  }, 1000);

  // linkedin counter limit set
  linkedinCounter.innerHTML = 320 - textAreaElement.value.split(" ").length;

  if (linkedinCounter.innerHTML < 0) {
    document.querySelector(".warning2").style.display = "block";
  } else {
    document.querySelector(".warning2").style.display = "none";
  }
  setTimeout(() => {
    document.querySelector(".warning2").style.display = "none";
  }, 1000);
};

textAreaElement.addEventListener("input", wordCounterHandler);
