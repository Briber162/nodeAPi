const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let post = `https://twitter.com/intent/tweet?text=${quotesData.text}+%0A+~${quotesData.author}`;
    window.open(post);

}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 30);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    author.innerText = `${quotesData.author}`;
    quotesData.author == null ?
        (author.innerText = "~Unknown") :
        (author.innerText = `~${quotesData.author}`);
}
const getQuotes = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        // console.log(realData);
        // console.log(realData[10].author);
    } catch (error) {

    }

}

newQuotes.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);
getQuotes();
