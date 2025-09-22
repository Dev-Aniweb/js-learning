let str1 = "listen", str2 = "silent";
let isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');
console.log(isAnagram ? "Anagram" : "Not Anagram");
