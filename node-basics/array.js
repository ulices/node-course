var grades = [100, 50, 97];

grades.push(79); //Add an item at the end
grades.unshift(20); //Add an item at the begining

var firstGrade = grades.shift(); //Extract first item
var grade = grades.pop(); //Extract last item

console.log(firstGrade);
console.log(grade);
console.log(grades);

console.log(grades[0]);

grades.push(75);

grades.forEach(function (grade) {
  console.log(grade);
});

console.log(grades.length);

grades.push(89);

var totalGrade = 0;

grades.forEach(function (grade) {
  totalGrade += grade;
  console.log('Current total is ' + totalGrade);
});

var average = totalGrade / grades.length;

console.log('Average is ' + average);
