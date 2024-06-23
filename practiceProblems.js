/*
countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
*/
function countZeroes(arr) {
  //find the index where the value switches to zero
  let zeroCount = 0;
  for (i in arr) {
    if (arr[i] === 0) {
      zeroCount++;
    }
  }
  console.log(zeroCount);

  //count the number of values til the end of the string
}

// countZeroes([1, 1, 1, 1, 0, 0]); // 2
// countZeroes([1, 0, 0, 0, 0]); // 4
// countZeroes([0, 0, 0]); // 3
// countZeroes([1, 1, 1, 1]); // 0

/*
sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

*/

function sortedFrequency(arr, val) {
  //get targeted number/ find each occurence
  let count = 0;
  for (i in arr) {
    if (arr[i] === val) {
      count++;
    }
  }
  if (count === 0) {
    return -1;
  }
  return count;
}
console.log("---sorted frequency ---");
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
/*
findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
*/

//iterate through array. find desired index .

function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (val === middleVal) {
      return middleIdx;
    }

    if (arr[leftIdx] <= middleVal) {
      if (val >= arr[leftIdx] && val < middleVal) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      // Right side is sorted
      if (val > middleVal && val <= arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }
  return -1;
}
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
