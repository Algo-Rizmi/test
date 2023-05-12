function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function anagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^a-z]/gi, "").toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, "").toLowerCase();

  // Count the frequency of each character in both strings
  const freq = {};

  for (const char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }

  // Check if all frequencies are zero
  for (const char in freq) {
    if (freq[char] !== 0) {
      return false;
    }
  }

  // If we made it this far, then the strings are anagrams
  return true;
}

function anagram2(str, stri) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== stri.indexOf(stri[i])) {
      return false;
    }
  }
  return true;
}

function getEvens(nums) {
  const evens = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
  }
  return evens;
}

function getMostCommonChar(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxChar = "";
  let maxFreq = 0;
  for (const char in freq) {
    if (freq[char] > maxFreq) {
      maxChar = char;
      maxFreq = freq[char];
    }
  }

  return maxChar;
}

function reverseWords(str) {
  const words = split(" ");

  const reverseWords = words.reverse();

  const reverseStr = reverseWords.join(" ");
  return reverseStr;
}

function sumTwoSmallestNumbers(numbers) {
  let smallest = Number.MAX_VALUE;
  let secondSmallest = numbers.MAX_VALUE;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmallest = smallest;
      smallest = smallest[i];
    } else if (numbers[i] < secondSmallest) {
      secondSmallest = smallest;
    }
  }
}

function discriminantCalculator(a, b, c) {
  const x = [];
  let squareD = Math.sqrt(b ** 2 - 4 * a * c);

  if (squareD > 0) {
    let x1 = (-b - squareD) / (2 * a);
    let x2 = (-b + squareD) / (2 * a);
    x.push(x1, x2);
  } else if (squareD === 0) {
    let onZero = -b / (2 * a);
    x.push(onZero);
  } else {
    x.push("No answer");
  }
  return x;
}

function smallestNumbers(numbers) {
  let smallestNumber = numbers.MAX_VALUE;
  let secondSmallest = numbers.MAX_VALUE;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > smallestNumber) {
      secondSmallest = smallestNumber;
      smallestNumber = smallestNumber[i];
    } else if (numbers[i] < secondSmallest) {
      secondSmallest = smallestNumber;
    }
  }
}

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const nummers = [1, 2, 3, 4, 5];

console.log(sumArray(nummers));

let twoSum = function (nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement, i)];
    }
    seen.set(nums[i], i);
  }
  return [];
};

function toArray(obj) {
  return Object.entries(obj);
}

let rows = 10;
let output = "";

for (let i = 0; i <= rows; i++) {
  for (let j = 1; j <= rows - i; j++) {
    output += " ";
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    output += "*";
  }

  output += "\n";
}

console.log(output);

function twoSameNumber(nums) {
  const uniqueNums = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums.has(nums[i])) {
      return true;
    }
    uniqueNums.add(nums[i]);
  }
  return false;
}
