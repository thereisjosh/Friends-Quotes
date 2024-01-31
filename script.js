const quotes = ['welcome to the real world! It sucks. You\'re gonna love it.', 'We were on a break!', 'Could I be wearing any more clothes?','She\'s your lobster','Can I interest you in a sarcastic comment?']

const lyrics = ['I watch that pretty life play out in pictures from afar', 'Just keep me where the light is', 'Just a great figure eight or a tiny infinity', 'Can\'t seem to shake these vultures off of my trail', 'And I\'ll be dreamin of the next time we can go into another serotonin overflow']
const meme =['pepeLaugh', 'monkaS', 'pogChamp', 'kekW', 'pauseChamp']
const nestedArr = [quotes, lyrics, meme]

function randomQuote(arr) {
    const arrIndex = Math.floor(Math.random() * arr.length);
        let arrCategory = arr[arrIndex]
        const quoteIndex = Math.floor(Math.random() * arrCategory.length)
        return arrCategory[quoteIndex]

}


console.log(randomQuote(nestedArr))
