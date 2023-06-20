let myArray = ['Guadalupe', 'Ollie', 'Aki']

function writeCards() {
    let cardNames = []
    for (let i = 0; i < myArray.length; i++) {
    cardNames.push(`Thank you, ${myArray[i]}, for the wonderful surprise gift!`)
    }
    return cardNames;
}

function countDown() {
    let downCount = 10;
    while (downCount <= 10 && downCount >= 0) {
        console.log(downCount--)
    }
    return downCount;
}