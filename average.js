
// - Write a function average(arr) that calculates the average of numbers in an array.
// average([10, 20, 30]); // Output: 20

function average(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i]
    }
    return sum/arr.length
}
console.log(average([10, 20, 30]))