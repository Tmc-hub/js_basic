// // let ageRange;
// // const age = 14
// // if (age is between 0 - 1) {
// //   assign `ageRange` to "infant"
// // } else if ( age is between 1 - 4) {
// //   assign `ageRange` to "toddler"
// // } else if ( age is between 4 - 10) {
// //   assign `ageRange` to "kid"
// // } else if ( age is between 10 - 20) {
// //   assign `ageRange` to "teenager"
// // } else if ( age is between 20 - 30) {
// //   assign `ageRange` to "gen Z"
// // } else {
// //   assign `ageRange` to "grandpa"
// // }

// const age = 14
// if(age <= 1){
//     console.log('Infant')
// } else if(age <= 4){
//     console.log('Toddler')
// } else if(age <= 10){
//     console.log('Kid')
// } else if(age <= 20){
//     console.log('Teenager')
// } else if(age <= 30){
//     console.log('Gen Z')
// } else{
//     console.log('Grandpa')
// }

// // and console.log ageRange
// // please share the output of your age in the comments

// const baumAcademy = {
//     courses: ["Web", "QA", "Kids-Coding"],
//     classHour: {
//       tuesday: {
//         day: "tuesday",
//         startHour: "6pm",
//         endHour: "9pm",
//         isLunchTime: false
//       },
//       thursday: {
//         day: "thursday",
//         startHour: "6pm",
//         endHour: "9pm",
//         isLunchTime: false
//       },
//       saturday: {
//         day: "saturday",
//         startHour: "10am",
//         endHour: "3pm",
//         isBreakTime: true
//       }
//     }
// }
// //   for(let i = 0; i < baumAcademy.length; i++)
//   // if tuesday, console.log "tuesday, class hour is from 6pm to 9pm"
//   // if thursday, console.log "thursday, class hour is from 6pm to 9pm"
//   // if saturday, console.log "saturday, class hour is from 10am to 3pm"
  
//   // advanced problem
//   // under if statement, add one more if statement checking `isLunchTime` condition
//   // if true, console.log we have lunch time
//   // if false, console.log we don't have lunch time

//     if(baumAcademy.classHour.tuesday.day === 'tuesday'){
//     console.log('tuesday, class hour is from 6pm to 9pm')
//   }
//     if(baumAcademy.classHour.thursday.day === 'thursday'){
//     console.log('thursday, class hour is from 6pm to 9pm')
//   }
//     if(baumAcademy.classHour.saturday.day === 'saturday'){
//     console.log('saturday, class hour is from 10am to 3pm')
//   }
  
//   if(baumAcademy.classHour.tuesday.isLunchTime === true){
//     console.log('we have lunch time on Tuesday')
//   } else{
//     console.log("we don't have lunch time on Tuesday")
//   }
//   if(baumAcademy.classHour.thursday.isLunchTime === true){
//     console.log('we have lunch time on Thursday')
//   } else{
//     console.log("we don't have lunch on Thursday")
//   }
//   if(baumAcademy.classHour.saturday.isLunchTime === true){
//     console.log('we have lunch time on Saturday')
//   }else{
//     console.log("we don't have lunch on Saturday")
//   }
  
  
// //   create an object with keys, "name", "address", "favoriteFoods" and "pets".
// //   "favoriteFoods" should be an array of your favorite foods and "pets" should be an object that has a "type" key and 
// //   the value should be the type of animal you have as a pet
  
//   const you = {
//     name: 'TaeMin Cho',
//     address: '9346 Athens rd',
//     favoriteFoods: ['pizza', 'burger', 'chicken', 'cookie'],
//     pets: {
//         type: 'Dog',
//         species: 'Scottish Terrier'
//     }
//   }
//   console.log('my name is', you.name, 'and I live at', you.address,'my favorite foods are', you.favoriteFoods, 'I used to own a', you.pets.type,'it was a', you.pets.species)

//   // problem #1
// const baum = [{name: "josh", age: 22}, {name: 'marco', age: 36}, {name: 'matthew', age: 39}, {name: 'inchan', age: 38}]
// let index = 0;
// // print name and age in while loop
// // for(let i = 0; i < baum.length; i++){
// //   console.log(baum[i])
//     while(index < baum.length){
//         console.log(baum[index].name, baum[index].age);
//         index++;
// }
// // problem #2
// // let number = 50
// // while number is greater than 0
// // print number from 50 to 0

// let number = 50;
// while(number >= 0){
//     console.log(number);
//     number--
// }

// // 1.Using a for loop, print out each student's name if they are in the QA course AND has no prior experience.
// // 2.Harder exercise - Using a for loop, only print the student's name if the student has class on  Friday.
// // Hint:  you can use for loops inside of for loops. 
// const students = [
//     {
//       name: "Phil",
//       course: "Web",
//       days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//       hasPriorExperience: true
//     },
//     {
//       name: "DJ",
//       course: "QA",
//       days: ["Tuesday", "Thursday", "Saturday"],
//       hasPriorExperience: true
//     },
//     {
//       name: "DC",
//       course: "QA",
//       days: ["Tuesday", "Thursday", "Saturday"],
//       hasPriorExperience: true
//     },
//     {
//       name: "Inchan",
//       course: "QA",
//       days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//       hasPriorExperience: false
//     },
//     {
//       name: "Esther",
//       course: "QA",
//       days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//       hasPriorExperience: false
//     },
//     {
//       name: "Josh",
//       course: "QA",
//       days: ["Tuesday", "Thursday", "Saturday"],
//       hasPriorExperience: false
//     },
//   ];

//   for(let i = 0; i < students.length; i++){
//     if(students[i].course === 'QA' && !students[i].hasPriorExperience){
//       console.log(students[i])
//     }
//   };
//   for(let i = 0; i < students.length; i++){
//     for(let j = 0; j < students[i].days.length; j++){
//       if(students[i].days[j] === "Friday"){
//         console.log(students[i].name);
//       }
//     }
//   } 

//   //   Problem 1:  Using a for loop, print all of the tesla's model names
// // Problem 2:  In your web browser, go to Google and search Object.keys(). Think about how we can use Object.keys(cars)
// // to loop over the keys in the cars object. What if we wanted to loop over the entire cars object and print only the car models 
// // that are available?  How do you think we can do this?
// // Note***  We have not yet learned about Object.keys() but we will learn about it tomorrow and more on Saturday!
// const cars = {
//   mercedes: {
//     models: [
//       { name: "C Class", isAvailable: true },
//       { name: "E Class", isAvailable: true },
//       { name: "S Class", isAvailable: true },
//       { name: "G Class", isAvailable: true },
//     ],
//   },
//   honda: {
//     models: [
//       { name: "Pilot", isAvailable: true },
//       { name: "Civic", isAvailable: true },
//       { name: "Accord", isAvailable: true },
//     ],
//   },
//   tesla: {
//     models: [
//       { name: "Model 3", isAvailable: false },
//       { name: "Model S", isAvailable: false },
//       { name: "Model Y", isAvailable: false },
//       { name: "Cyber Truck", isAvailable: false },
//     ],
//   },
// };

// for(let i = 0; i < cars.tesla.models.length; i++){
//   console.log(cars.tesla.models[i].name)
// };

// // Create a function that takes in a string and number as arguments, and prints out the string that many times. 
// // For example:
// // printStrings(“hello”, 3)
// // Prints:
// // “hello”
// // “hello”
// // “hello”

// const brand = Object.keys(cars)
// for(let i = 0; i < brand.length; i++){
//   for(let j = 0; j < cars[brand[i]].models.length; j++){
//     if(cars[brand[i]].models[j].isAvailable === true){
//       console.log(cars[brand[i]].models[j].name)
//     }
//   }
// }

// function hiya(string, times){
//   for(let i = 0; i < times; i++){
//     console.log(string)
//   }
// }
// hiya("hiya", 3)

// function numCalc(num1, num2, operator){
//   let result
//   if(operator === "+"){
//     result = num1 + num2;
//   // }else if(operator === "-"){
//   //     result = num1 - num2;
//   // }else if(operator === "*"){
//   //       result = num1 * num2;
//   // }else if(operator === "/"){
//   //         result = num1 / num2;
// //   }else{
// // console.log("Invalid")
// }
//   return `${num1} ${operator} ${num2} = ${result}`
// }

// console.log(numCalc(20, 2, "+"));
// // console.log(numCalc(99, 29, "-"));
// // console.log(numCalc(200, 10, "*"));
// // console.log(numCalc(10, 2, "/"));

// //1.Write a function add(a, b) that returns the sum of two numbers.
// // Example:
// // add(2, 3); // Output: 5
// function add(a,b){
//   return a + b
// }
//  console.log(add(2, 3));

// function add2(a,b){
//   console.log(a + b)
// }
// add2(9,10)
// //2. Write a function celsiusToFahrenheit(celsius) to convert a temperature from Celsius to Fahrenheit.
// // Formula: F = C * 9/5 + 32.
// // Example:
// // celsiusToFahrenheit(0); // Output: 32
//  function celsiusToFahrenheit(celsius){
//   return celsius * 9/5 + 32
//  }
//  const fahrenheit = celsiusToFahrenheit(15)
//  console.log(fahrenheit)

//  function celsiusToFahrenheit2(celsius2){
//   console.log(celsius2 * 9/5 + 32)
//  }
// celsiusToFahrenheit2(1)

// //3. Write a function maxOfTwo(a, b) that returns the larger of two numbers.
// // Example:
// // maxOfTwo(10, 20); // Output: 20
// function maxOfTwo(a, b){
//   if(a > b){
//     return a
//   }else{
//     return b
//   }
// }
// const max = maxOfTwo(5, 3)
// console.log(max)

// // //4. Write a function isEven(num) that returns true if a number is even, otherwise false.
// // Example:
// // isEven(4); // Output: true
// // isEven(7); // Output: false
// function isEven(num){
//   if(num % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// }
// const even = isEven(8)
// console.log(even)

// //4. (More efficient?)
// function isEven2(num2){
//   return num2 % 2 === 0
// }
// const even2 = isEven2(9)
// console.log(even2)

// //5. Write a function reverseString(str) that takes a string and returns it reversed.
// // Example:
// // reverseString("hello"); // Output: "olleh"
// function reverseString(str){
//  return str.split('').reverse().join('')
// }
// console.log(reverseString('John Wick'))

// function reverseString2(str2){
//   console.log(str2.split('').reverse().join(''))
// }
// reverseString2('Mr.Mime')

// // //6. Write a function countVowels(str) that counts the number of vowels in a string.
// // Example:
// // countVowels("hello world"); // Output: 3
// function countVowels(vStr){
//   let count = 0
//   const vowels ='aeiouAEIOU'

//   for(let i = 0; i < vStr.length; i++){
//     if(vowels.includes(vStr[i])){
//       count++
//     }
//   }
//   return count
// }
// console.log(countVowels2('Show me the money'))
// console.log(countVowels2('Blacksheep Wall'))
// console.log(countVowels2('All your bases are belong to us'))

// function countVowels2(vStr2){
//   let count2 = 0
//   const vowels2 ='aeiouAEIOU'

//   for(let i = 0; i < vStr2.length; i++){
//     if(vowels2.indexOf(vStr2[i]) !==-1){
//       count2++
//     }
//   }
//   return count2
// }
// console.log(countVowels2('Show me the money'))
// console.log(countVowels2('Blacksheep Wall'))
// console.log(countVowels2('All your bases are belong to us'))

// //7. Write a function findLargest(arr) that returns the largest number in an array.
// // Example:
// // findLargest([1, 2, 3, 4, 5]); // Output: 5
// function findLargest(arr){
//   let largest = arr[0]
//   for(let i = 0; i <= arr.length; i++){
//     if(arr[i] > largest){
//       largest = arr[i]
//     }
//   }
//   return largest
// }
// console.log(findLargest([1,2,3,4,5]))
// console.log(findLargest([-1,5,88,101,-5,2,23]))

// // function findLargest2(arr2){
// //   return Math.max(...arr2)
// // }
// // console.log(findLargest2([2,6,11,1,4,15,22]))

// //8. Write a function sumArray(arr) that returns the sum of all numbers in an array.
// // Example:
// // sumArray([1, 2, 3, 4]); // Output: 10
// function sumArray(arr){
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   console.log(sum)
// }
// (sumArray([1,2,3,4,5,6,7]))

// function sumArray2(arr2){
//   let sum2 = 0
//   for(let i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
//   }
//   return sum2
// }
// console.log(sumArray2([1,2,3,4,5,6,7,8]))

// //9. Write a function fizzBuzz(n) that prints numbers from 1 to n.
// // Rules:
// // For multiples of 3, print "Fizz".
// // For multiples of 5, print "Buzz".
// // For multiples of both, print "FizzBuzz".
// // Example:
// // fizzBuzz(5); 
// // // Output: 1, 2, "Fizz", 4, "Buzz"
// function fizzBuzz(n){
//   for(let i = 0; i <= n; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log(i, 'FizzBuzz')
//     }else if(i % 3 === 0){
//       console.log(i, 'Buzz')
//     }else if(i % 5 ===0){
//       console.log(i, 'Fizz')
//     }else{
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(20)

// //10.Write a function findIndex(arr, value) that returns the index of a given value in an array if not exists, then return "not exist"
// // Example:
// // findIndex([10, 20, 30], 20); // Output: 1
// function findIndex(arr, value){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === value){
//       return i
//     }
//   }
//   return "Does not Exist"
// }
// console.log(findIndex([1, 2, 3, 4, 5], 4))
// console.log(findIndex([10, 20, 30, 40, 50], 70))

function secondLargest(arr){
    let largest = 0
    let second = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > second && arr[j] < largest){
            second = arr[j]
        }
    }
    return second
}
console.log(secondLargest([2,20,4,1,5,6,8,10,13,15,29]))
console.log(secondLargest([2,4,20,6,8,10,15,13]))