 export function longestWord(sentences) {
    let w = sentences.split(' ');
    let longword = '';
    for (let i = 0; i < w.length; i++) {
        if (w[i].length >= longword.length) {
            longword = w[i];
        }
    }
    return longword;
}

export function shortestWord(sentences) {
    let w = sentences.split(' ');
    let shortword = w[0]; 
    for (let i = 1; i < w.length; i++) {
        if (w[i].length <= shortword.length) {
            shortword =w[i];
        }
    }
    return shortword;
}

export function wordLengths(sentences) {
    let summ = 0;
    let w = sentences.split(' ');
    for (let i = 0; i < w.length; i++) {
        summ += w[i].length;
    }
    return summ;
}

// let sentence = 'The yellow dog barked loud';
// console.log(longestWord(sentence));
// console.log(shortestWord(sentence));
// console.log(wordLengths(sentence)); 