trivia = document.querySelector("#trivia");
triviaBtn = document.querySelector("#triviaBtn");
triviaBtn.addEventListener("click", triviaRandom());

data = document.querySelector("#data");
dataBtn = document.querySelector("#dataBtn");
dataBtn.addEventListener("click", dataRandom());

math = document.querySelector("#math");
mathBtn = document.querySelector("#mathBtn");
mathBtn.addEventListener("click", mathRandom());

function fazGet(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();

  return req.responseText;
}

function triviaRandom() {
  const triviaText = fazGet("http://numbersapi.com/random/trivia");
  trivia.innerText = triviaText;
}

function dataRandom() {
  const dataText = fazGet("http://numbersapi.com/random/date");
  data.innerText = dataText;
}

function mathRandom() {
  const mathText = fazGet("http://numbersapi.com/random/math");
  math.innerText = mathText;
}
