const second = document.getElementById("second");
const numbersRow = document.getElementById("nambersRow");






function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

var numbers = [1, 2, 3, 4];
const initNamber = () => {
    shuffle(numbers);
    numbers.map((namber, index) => {
        const col = document.createElement("div");
        col.className = `col-6 col-sm-3`;
        col.innerHTML = `<div class="box"><span class="namber">${namber}</span></div>`;

        numbersRow.appendChild(col);
    });

};
initNamber();

let a = 6
const timer = setInterval(() => {

    console.log(a);
    if (a > 0) {
        second.innerHTML = --a;

    }
    else {
        clearInterval(timer);

    }
}, 1000)



