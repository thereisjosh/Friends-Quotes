const quotes = ['welcome to the real world! It sucks. You\'re gonna love it.', 'We were on a break!', 'Could I be wearing any more clothes?','She\'s your lobster','Can I interest you in a sarcastic comment?']

function randomQuote(arr) {
    quoteIndex = Math.floor(Math.random() * arr.length);
    return arr[quoteIndex];
}


console.log(randomQuote(quotes))

   