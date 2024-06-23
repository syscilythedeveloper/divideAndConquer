// Works best for if you have an unordered list
// At best case, the value is the first element at O(1), but is O(n) because as the length of the items in the list increases, so does the number of steps required to perform the task, this can be cute with an array that's short, but terrible for long array

// O(n) at worst case, because you may have to perform tons of operations
//Steps:
//1 - loop through the array for the desired value
//2 - if you find the desired value, return the index
//3 - if you don't return -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// console.log(linearSearch([1, 2, 3], 1));
// console.log(linearSearch([1, 2, 3], 2));
// console.log(linearSearch([1, 2, 3], 3));
// console.log(linearSearch([1, 2, 3], 4));

/*Directions: 
Write a function that checks if a member a member of the band. 

#1. What inputs will you need? 
  -members, formerMembers, name

#2. What is the expected output?
  - message stating whether or not the person is a member of the band 

  What ifs?
  -The person was formerly a member of the band? 


*/

function searchRnBGroup(group, person, formerMembers) {
  //turn group into lower case
  group = group.map((member) => member.toLowerCase());
  lowerPerson = person.toLowerCase();

  //check if formerMembers were passed in, if so, check if the person was a former member
  if (formerMembers) {
    formerMembers = formerMembers.map((member) => member.toLowerCase());

    if (formerMembers.includes(lowerPerson))
      return `${person} used to be in the group, but is no longer a member `;
  }

  //check if the name is in the group
  for (let i = 0; i < group.length; i++) {
    if (group[i] === person) return `${person} is in the group`;
  }
  return `${person} is not in the group`;
}

const destinysChild = ["Michelle", "Kelly", "Beyonce"];
const dcFormerMembers = ["Letoya", "Lativia", "Farrah"];

console.log(searchRnBGroup(destinysChild, "Michelle", dcFormerMembers));
console.log(searchRnBGroup(destinysChild, "Beyonce", dcFormerMembers));
console.log(searchRnBGroup(destinysChild, "Kelly", dcFormerMembers));
console.log(searchRnBGroup(destinysChild, "Letoya", dcFormerMembers));

console.log(searchRnBGroup(["KC", "Jojo"], "KC"));
console.log(searchRnBGroup(["KC", "Jojo"], "kc"));

function factors(n) {
  const searchRange = Math.floor(n / 2);
  let factors = [];

  for (let i = 2; i <= searchRange; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

factors(377);
