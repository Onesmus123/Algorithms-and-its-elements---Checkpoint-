function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char !== ' ') {
            sentenceLength++;
        }
        if (char === ' ') { 
            wordCount++;
        }
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    if (sentence[sentence.length - 1] !== ' ') {
        wordCount++;
    }
    
    return [sentenceLength, wordCount, vowelCount];
}

const sentence = prompt("Enter a sentence ending with a period: ");
const [length, words, vowels] = analyzeSentence(sentence);

console.log("Length of the sentence:", length);
console.log("Number of words in the sentence:", words);
console.log("Number of vowels in the sentence:", vowels);
