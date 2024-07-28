// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(arr) {

    let abc = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      abc.push(arr[i]);
    }
    return abc;
  }
  
  let small= [1, 2, 3, 4, 5];
  console.log(reverseArray(small)); 
  
let large = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(reverseArray(large)); 



// // 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

var arr = [4, -2,6,-5, 0, 2, -67, -8, 10, -34];


function getNegativeNumbers(array) {
  return array.filter(value => value < 0);
}
console.log(getNegativeNumbers(arr));




// var loop= [1,2,3,4,5,6,,78,9,0,1,5,]
// for (i=0;i<=10;i++){
//     console.log(loop)
// // }6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.


const minBy = (arr, fn) => {
    return Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
  };
  

  const crt = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
  console.log(minBy(crt, o => o.n)); 
  

//   10. Write a JavaScript program to find the index of an array item in a for loop.

const myArray = [10, 20, 30, 40, 50,];
const val = 30;
const index = myArray.indexOf(val);

if (index !== -1) {
    console.log(`Index of ${val}: ${index}`);
} else {
    console.log(`${val} not found in the array.`);
}





// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function newstring(str) {
    
    if (str.length >= 3) {
        
        const result_str = str.substring(str.length - 3);
    
        return result_str + result_str + result_str + result_str;
    } else {
        
        return false;
    }
}

console.log(newstring("JavaScript")); 



// 5.Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.


function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(check_numbers(12, 101)); 
console.log(check_numbers(52, 80));  
console.log(check_numbers(15, 99));  




function countVowels(str) {
    // Define the vowels
    const vowels = 'aeiouAEIOU';
    // Initialize a count variable
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Example usage:
const exampleString = "Hello, World!";
console.log(countVowels(exampleString)); // Output: 3




function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original cleaned string is equal to the reversed string
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("mom"));   // Output: true
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("refer")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true



function getAngleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

// Example usage:
console.log(getAngleType(45));  // Output: Acute angle
console.log(getAngleType(90));  // Output: Right angle
console.log(getAngleType(135)); // Output: Obtuse angle
console.log(getAngleType(180)); // Output:

