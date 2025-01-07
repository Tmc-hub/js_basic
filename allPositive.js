// - Write a function areAllPositive that returns true if all numbers in the array are positive, and false otherwise.
// areAllPositive([1, 2, 3, 4]); // Output: true
// areAllPositive([1, -2, 3, 4]); // Output: false

function areAllPositive(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= 0){
            return false
        }
    }
    return true
}
console.log(areAllPositive([1,2,3,4]))
console.log(areAllPositive([1,-2,3,4]))