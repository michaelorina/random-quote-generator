var quotes = [
    'Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are. — Will Ferrell',
    'I thought I was promiscuous, but it turns out I was just thorough. — Russell Brand',
    'As a man in a relationship, you have a choice: You can be right or you can be happy. — Ralphie May',
    'Always remember that you are absolutely unique. Just like everyone else. Margaret Mead',
    'Laziness is nothing more than the habit of resting before you get tired. Jules Renard',
    'Between two evils, I always pick the one I never tried before. Mae West',
]


function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotesDisplay').innerHTML = quotes[randomNumber];
    
}
function randWallpaper(){
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray.Array[0].src = 'img/5.jpg';

    imgArray[1] = new Image();
    imgArray.Array[0].src = 'img/6.jpg';

    imgArray[2] = new Image();
    imgArray.Array[0].src = 'img/7.jpg';
}