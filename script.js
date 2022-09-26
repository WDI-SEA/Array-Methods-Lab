Skip to content
 Enterprise
Search or jump to…
Pull requests
Issues
Explore
 
@KareemD123 
Flex-322
/
hw5-array-methods
Public
forked from Staging-322/hw6-array-methods
0
0
135
Code
Pull requests
Projects
Wiki
Security
Insights
Settings
hw5-array-methods/script.js
@esin87
esin87 Update script.js
Latest commit ecb0200 on Oct 1, 2020
 History
 1 contributor
57 lines (46 sloc)  2.08 KB
   
// For this assignment, you should not delete any of the starter code or data.
// You should fill in the arrow callback function that each iteration
// method needs to meet each questions's criteria.

const holidays = [
	{ name: 'valentines day', month: 'february' },
	{ name: 'cinco de mayo', month: 'may' },
	{ name: 'halloween', month: 'october' },
];

// Question 1: Given the array above, write the callback for 'find' to return
// the holiday object that occurs in the month of 'may'.
const mayHoliday = holidays.find(() => {});

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant'];

// Question 2: Given the array above, write the callback for 'filter' to return
// a new array that only has the words from the original that had less than four
// letters.
const wordsWithLessThanFourLetters = words.filter(() => {});

// Question 3: Given the same array of words, write the callback for 'every' to
// determine if all the words in the array contain the letter 'a'.
const doesEveryWordContainA = words.every(() => {});

// Question 4: Given the same array of words, write the callback for 'some' to
// determine if any word in the array contains the letter 'x'.
const doesAnyWordContainX = words.some(() => {});

const developersArray = [
	{ name: 'ralph', language: 'javascript' },
	{ name: 'gretchen', language: 'javascript' },
	{ name: 'alice', language: 'python' },
	{ name: 'mohammed', language: 'javascript' },
	{ name: 'pat', language: 'python' },
	{ name: 'taylor', language: 'python' },
	{ name: 'hideo', language: 'javascript' },
];

// BONUS!!!!! Given the array of developer objects above, write the callback
// function for reduce to return an object that has two keys, 'javascript' and
// 'python'.

// The 'javascript' key should be equal to the number of developers that have
// 'javascript' set to their 'language'.

// The 'python' key should be equal to the number of developers that have
// 'python' set to their 'language'.

// the final output should look like this object:
/*
{
  javascript: 4,
  python: 3
}
*/
const devLanguageCounts = developersArray.reduce(() => {}, {});
© 2022 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 3.3.8
Loading complete
