
const arrObject = {
 quotes: ['welcome to the real world! It sucks. You\'re gonna love it.', 'We were on a break!', 'Could I be wearing any more clothes?','She\'s your lobster','Can I interest you in a sarcastic comment?'],
 lyrics: ['I watch that pretty life play out in pictures from afar', 'Just keep me where the light is', 'Just a great figure eight or a tiny infinity', 'Can\'t seem to shake these vultures off of my trail', 'And I\'ll be dreamin of the next time we can go into another serotonin overflow'],
 meme: ['pepeLaugh', 'monkaS', 'pogChamp', 'kekW', 'pauseChamp']
}

let newArr = [];

for (let category in arrObject) {
    const quoteIndex = Math.floor(Math.random() * arrObject[category].length)

    switch(category) {
        case 'quotes':
            newArr.push(`Quote: ${arrObject[category][quoteIndex]}`)
            break;
        case 'lyrics':
            newArr.push(`Lyric: ${arrObject[category][quoteIndex]}`)
            break;
        case 'meme':
            newArr.push(`Meme: ${arrObject[category][quoteIndex]}`)
            break;
        default: 
            newArr.push('There is not enough info.')
            break;
    }
}

function randomQuote(arr) {
    const formatted = arr.join('\n')
    console.log(formatted);
}



randomQuote(newArr)
