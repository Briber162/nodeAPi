const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quotesData = "";

//using the twitter API
const tweetNow = () => {
    let post = `https://twitter.com/intent/tweet?text=${quotesData.text}+%0A+~${quotesData.author}`;
    window.open(post);

}

//Math.Random() - it generates anumber from 0 to 1 (including 0 but excluding 1) 
//here we have multiplied it be 30 so the random number generated will be in the range of 0 to 29
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
//await: it is a promise, can only be sued inside an async fnuction
//await causes a function to stop going forward untill a specific task is completed ie rejected or completed(known as the promise)

newQuotes.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);
getQuotes();
