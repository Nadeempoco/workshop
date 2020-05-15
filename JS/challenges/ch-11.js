// WEEK 5 → DAY 2
// Equality of 3 Values



function equal(a, b, c) {
  if (a === b && a === c) {
    return 3;
  }
  if (a === b || a === c || b === c) {
    return 2;
  } else
    return 0;
};

print(
  equal(
    prompt("Enter the first number"), prompt("Enter the second number"), prompt("Enter the third number")
  )
);