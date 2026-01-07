
const words=["i","my", "name ", "is ", "anil","kumar ","verma ","wordpres developer "];
const TOTAL_LINES=1000;
const ALL_WORDS=[]
for (let i = 0; i < TOTAL_LINES; i++) {
  
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
         console.log(sentence);
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
        ALL_WORDS.push(sentence);
      
}
console.log(ALL_WORDS);