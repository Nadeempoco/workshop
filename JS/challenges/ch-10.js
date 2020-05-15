// WEEK 5 → DAY 2
// Using the ternary operator create a condition who checks if today is Tuesday


function todayIsTuesday() {

  let today = new Date();
  let day = today.getDay();

  return (day === 2 ? "Yes; today is Tuesday" : "No; today is not Tuesday");

};

print(todayIsTuesday());