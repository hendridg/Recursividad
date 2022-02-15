// Returns the first character of the string str
const firstCharacter = function (str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
const lastCharacter = function (str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
const middleCharacters = function (str) {
  return str.slice(1, -1);
};

const isPalindrome = function (str) {
  // base case #1
  if (str.length === 0 || str.length === 1) {
    return true;
    // base case #2
  } else if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
    // recursive case
  } else {
    return isPalindrome(middleCharacters(str));
  }
};

const checkPalindrome = function (str) {
  console.log("Is this word a palindrome? " + str);
  console.log(isPalindrome(str));
};

checkPalindrome("a");
// Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
// Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
// Program.assertEqual(isPalindrome("rotor"), true);
checkPalindrome("loco");
// Program.assertEqual(isPalindrome("loco"), false);
checkPalindrome("aiclid");
// Program.assertEqual(isPalindrome("aiclid"), false);
