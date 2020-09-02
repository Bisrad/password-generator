/**
 * index.js
 * - Functions utilize charCode to establish random letters, numbers and Symbols
 */

// Clear the concole on every refresh
console.clear();

// Store value in Element

// The Viewbox where the result will be shown
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');

// Checkboxes representing the options that is responsible to create differnt type of password based on user
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

// Button to generate the password
const generateEl = document.getElementById('generate');
// button to Copy Password to clipboard
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// on-click Listener

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  generatedPassword = true;
  
  // console.log(typeof length);
  // console.logo(hasLower, hasUpper, hasNumber, hasSymbol);
  
  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
  );
});

// Copy password to clipboard - https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) {
    return; 
  }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

// Generate Password Function
  // 1.Int pw var
  // 2.Filter out unchecked types
  // 3.Loop over the length call a generator funtion for each type
  // 4.Add final pw to the pw var and return

function generatePassword(lower, upper,number, symbol, length) {
  let generatedPassword = '';
  
  const typesCount = lower + upper + number + symbol;
  
  // console.log(typesCount: ', typesCount);
              
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item =>        Object.values(item)[0]
);
  // console.log('typesArr: ', typesArr);

if(typesCount === 0) {
  return '';
 }

 for(let i = 0; i < length; i += typesCount){
   typesArr.forEach(type => {
     const funcName = Object.keys(type)[0];
     // console.log('funcName: ', funcName);
     
     generatedPassword += randomFunc[funcName]();
   });
 }
  console.log(generatedPassword);
  const finalPassword = generatedPassword.slice(0,length);
  return finalPassword;
}

// Generator Functions - https://www.net-comber.com/charset.html
// Using Math.random + charCode to generate assigned variable


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  //console.log(`${getRandomLower} is your random Lowercase letter`); 
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //console.log(`${getRandomUpper} is your random Uppercase letter`);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //console.log(`${getRandomNumber} is your random number`);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}<>/,:';
  return symbols[Math.floor(Math.random() * symbols.length)];
  //console.log(`${getRandomSymbol} is your random Symbol`)
}



