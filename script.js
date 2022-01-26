const quot = document.getElementById("quoets");
const author = document.getElementById("author");
const newQuoets = document.getElementById("newQuoets");
const twit = document.getElementById("twit");
let data = "";
const randomNewQuotes = () => {
  let randnum = Math.floor(Math.random() * 100);
  data = res[randnum];
  quot.innerText = `${data.text}`;
  data.author == null
    ? (author.innerText = "unknown")
    : (author.innerText = `${data.author}`);
};
const twitNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${data.text}`;
  window.open(tweetPost);
};
const quotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    res = await data.json();
    randomNewQuotes();
  } catch (error) {
    console.log(error);
  }
};
twit.addEventListener("click", twitNow);
newQuoets.addEventListener("click", quotes);
quotes();
