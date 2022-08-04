// Code your solutions in this file
const countDown = (number) => {
    let n = number;
    while (n >= 0){
        console.log(n--)
    }
}

function writeCards(names, content){
    const messages = []

    for(let a = 0; a < names.length; a++){
        const message = `Thank you, ${names[a]}, for the wonderful ${content} gift!`
        messages.push(message)
    }

    

    return messages;
}