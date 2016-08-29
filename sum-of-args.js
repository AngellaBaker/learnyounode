// this program is to go through a list of console supplied arguments and return a sum of numbers.
// define sum
var sum = 0
// loop, excludes node and program location, adds values to sum
for (i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}
// prints sum to console
console.log(sum);
