const fortunes = [
    "“Poetry is when an emotion has found its thought and the thought has found words.” – Robert Frost",
    "“To read a poem is to hear it with our eyes; to hear it is to see it with our ears.” – Octavio Paz",
    "“Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility.” – William Wordsworth",
    "“A poet is, before anything else, a person who is passionately in love with language.” – W. H. Auden",
    "“Poetry is eternal graffiti written in the heart of everyone.” – Lawrence Ferlinghetti",
    "“Genuine poetry can communicate before it is understood.” – T.S. Eliot",
    "“Poetry is language at its most distilled and most powerful.” – Rita Dove",
    "“You will never be alone with a poet in your pocket.” – John Adams"
];

function displayRandomFortune() {
    const fortuneBox = document.getElementById('fortune-box');
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneBox.innerText = randomFortune;
}

window.onload = displayRandomFortune;
