"use strict";
{
    function countWordOccurrences(sentence, word) {
        const words = sentence.toLowerCase().split(" ");
        const wordTarget = word.toLowerCase();
        const totalWord = words.filter((w) => w === wordTarget).length;
        return totalWord;
    }
}
