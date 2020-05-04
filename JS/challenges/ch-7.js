// week 4, day 2, challange 1 Objects
// Extract City Facts

function cityFacts(city) {
  cityOutput = city.name + " has a population of " + city.population + " and is located in " + city.continent;
  console.log(cityOutput);
};

cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
});
cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
})