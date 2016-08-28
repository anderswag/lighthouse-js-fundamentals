var temperature = 12;
var raining = true;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
  if (raining){
    console.log("Also bring and umbrella");
  }
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");