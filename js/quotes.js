let genQuote = document.querySelector('.change-quote');

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let random = data[Math.floor(Math.random() * data.length)];
    quotation.innerText = `“${random.text}”`;
    source.innerText = random.author;
    if ( language == 'ru'){
        quotation.innerText = `“${random.textRu}”`;
        source.innerText = random.authorRu;
    }
}

let deg = 0;
genQuote.addEventListener('click', () => {
    deg += 180;
    genQuote.style.transform = `rotate(${deg}deg)`;
    getQuotes();
});
buttonRu.addEventListener("click", getQuotes);
buttonEng.addEventListener("click", getQuotes);

getQuotes();