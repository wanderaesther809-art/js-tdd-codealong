// Your code here
// src/utils.js

// Function to calculate current age based on birth year
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
