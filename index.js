function writeCards(names, value) {
    let messageNames = []
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
    return countDown;
}
