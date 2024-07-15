/* ex1
const ages = [32, 33, 16, 40];
// Get every element in the array that has a value of 18 or more
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
result = ages.filter(checkAdult);
console.log(result);
// [32, 33, 40]
*/

/* ex1: another way
const ages = [32, 33, 16, 40];
result = ages.filter(value => value >= 18);
console.log(result);
*/

/* ex1: another way
const ages = [32, 33, 16, 40];
result = ages.filter(function(x) {
  return x >= 18;
});
console.log(result);
*/

/* ex1: another way
const ages = [32, 33, 16, 40];
result = ages.filter(() => {
  return x >= 18;
});
document.getElementById("demo").innerHTML = result;
*/

/*
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
*/

/*
<!-- حقل إدخال لتحديد العمر المراد التحقق منه، القيمة الافتراضية هي 30 -->
<p><input type="number" id="ageToCheck" value="30"></p>

<!-- زر لتشغيل الدالة 'myFunction' عند الضغط عليه -->
<button onclick="myFunction()">Test</button>

<!-- عنصر 'p' لعرض النتيجة -->
<p id="demo"></p>

<>
// مصفوفة تحتوي على مجموعة من الأعمار
const ages = [32, 33, 12, 40];

// دالة للتحقق من العمر، تأخذ عمراً كمعامل وتعيد صحيح إذا كان العمر أكبر من القيمة في حقل الإدخال
function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

// دالة تُنفذ عند الضغط على الزر
function myFunction() {
  // تُصفي الأعمار في المصفوفة بناءً على دالة 'checkAge' وتُعرض النتيجة في عنصر 'p' الذي يحتوي على المعرف 'demo'
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}
*/

/*
<!-- حقل إدخال لتحديد العمر المراد التحقق منه، القيمة الافتراضية هي 30 -->
<p><input type="number" id="ageToCheck" value="30"></p>

<!-- زر لتشغيل الدالة 'myFunction' عند الضغط عليه -->
<button onclick="myFunction()">Test</button>

<!-- عنصر 'p' لعرض النتيجة -->
<p id="demo"></p>

<>
// مصفوفة تحتوي على مجموعة من الأعمار
const ages = [32, 33, 12, 40];

// دالة تُنفذ عند الضغط على الزر
function myFunction() {
  // تُصفي الأعمار في المصفوفة بناءً على شرط التحقق من العمر داخل نفس الدالة وتُعرض النتيجة في عنصر 'p' الذي يحتوي على المعرف 'demo'
  document.getElementById("demo").innerHTML = ages.filter(function(age) {
    return age > document.getElementById("ageToCheck").value;
  });
}
*/

/*
Syntax
array.filter(function(currentValue, index, arr), thisValue)
*/

/*
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(function(currentValue, index, arr) {
  return currentValue % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]

// currentValue هو العنصر الحالي في المصفوفة أثناء التكرار.
// index هو الفهرس (الترتيب) الحالي للعنصر في المصفوفة.
// arr هي المصفوفة الأصلية.
// thisValue هو القيمة التي يمكن استخدامها كمرجع داخلي (اختياري، لم يتم استخدامه في هذا المثال).
// الدالة تقوم بإرجاع مصفوفة جديدة تحتوي فقط على الأرقام الزوجية من المصفوفة الأصلية numbers.
*/

/*
const numbers = [4, 9, 16, 25];
*/

/* map() */
/*
const numbers = [4, 9, 16, 25];
const result = numbers.map(Math.sqrt);
console.log(result); // [2, 3, 4, 5]
*/

/*
const numbers = [4, 5, 6, 7];
function myFunction(num) {
  return num * 10;
}
result = numbers.map(myFunction);
console.log(result); // [40, 50, 60, 70]
*/

/*
Description
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

/*
array.map(function(currentValue, index, arr), thisValue)
*/

/*
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" }
];
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
console.log(persons.map(getFullName)); // ['Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb']
*/
