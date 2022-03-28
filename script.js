const characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  symbol: "!@#$%^&*?=+-><(){}[]_/~",
  number: "0123456789",
};

var includeNumbers = false;
var includeUppercase = false;
var includeLowercase = false;
var includeSymbols = false;

var passwordLength = 0;
var length = passwordLength;

var password = "";

function generatePassword() {
  password = "";
  console.log("passwordLength: " + passwordLength);

  while (password.length < passwordLength) {
    if (includeNumbers && password.length < passwordLength) {
      password +=
        // password +
        characters.number[Math.floor(Math.random() * characters.number.length)];
    }
    if (includeUppercase && password.length < passwordLength) {
      password +=
        // password +
        characters.upperCase[
          Math.floor(Math.random() * characters.upperCase.length)
        ];
    }
    if (includeLowercase && password.length < passwordLength) {
      password +=
        // password +
        characters.lowerCase[
          Math.floor(Math.random() * characters.lowerCase.length)
        ];
    }
    if (includeSymbols && password.length < passwordLength) {
      password +=
        // password +
        characters.symbol[Math.floor(Math.random() * characters.symbol.length)];
    }
  }

  console.log(password.length);
  // for (var i = 0; i < length; i++) {
  //   password += characters.charAt(Math.floor(Math.random() * length))
  // }

  return password;
}

function setPasswordCriteria() {
  passwordLength = +prompt("How long would you like your password to be?");

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = +prompt("Please enter a number between 8 and 128");
  }

  alert("Your password will be " + passwordLength + " characters long");

  includeNumbers = confirm("Include numbers?");

  includeUppercase = confirm("Include Uppercase letters?");

  includeLowercase = confirm("Include lowercase letters?");

  includeSymbols = confirm("Include symbols?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  setPasswordCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt page with criteria,
//                  length 8-128,
//                  special characters?
//                  lowercase?,
//                  uppercase?,
//                  numeric?
// input is valid
// generate password
