
const palindrome = (str) => {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the cleaned string is equal to its reverse
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
};
alert("Palindrome module loaded.");

const checkPalindrome = () => {
  const inputStr = document.getElementById("palindromeEntry").value;
  const result = palindrome(inputStr);
  const outputElement = document.getElementById("palindromeOutput");
  if (result) {
    outputElement.textContent = `"${inputStr}" is a palindrome.`;
    outputElement.style.color = "green";
  } else {
    outputElement.textContent = `"${inputStr}" is not a palindrome.`;
    outputElement.style.color = "red";
  }
};

