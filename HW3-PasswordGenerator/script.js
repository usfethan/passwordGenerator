var special = "!#$%&()*+,-./:;<=>?@^_`{|}~";
var specialArray = special.split("");
var num = "123456789";
var numArray = num.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");
var upperCase = lowerCase.toUpperCase();
var upperCaseArray = upperCase.split("");

var firstArray = specialArray.concat(numArray);
var secondArray = lowerCaseArray.concat(upperCaseArray);

var finalArray = firstArray.concat(secondArray);

// Assignment Code
var generateBtn = document.querySelector("#generate");

//  #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// random element
function getRandomElement() {
  var index = Math.floor(Math.random() * finalArray.length);
  var randomElement = finalArray[index];
  return randomElement;
}

console.log(getRandomElement());

function generatePassword() {
  var inputLength = Number(
    prompt("What length do you want your password?", "")
  );

  var confSpecial = confirm("Do you want special characters?");
  var confNum = confirm("Do you want numbers?");
  var confUpperCase = confirm("Do you want upper case letters?");
  var confLowerCase = confirm("Do you want lower case letters?");

  var newPassword = "";

  if (
    inputLength >= 8 &&
    inputLength <= 128 &&
    confSpecial &&
    confNum &&
    confUpperCase &&
    confLowerCase
  ) {
    for (var i = 0; i < inputLength; i++) {
      var randomPassword = getRandomElement();
      newPassword += randomPassword;
    }
  } else if (inputLength < 8) {
    alert("Password is not long enough!");
  } else if (inputLength > 128) {
    alert("Password is too long!");
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);