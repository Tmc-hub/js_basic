// -  Write a function isMultipleOf(a, b) that checks if a is a multiple of b.
// isMultipleOf(15, 5); // Output: true

function isMultipleOf(a, b){
    return a % b === 0
}
console.log(isMultipleOf(15,5))

function isMultipleOf2(a, b){
    if(a % b === 0){
        return true
    }else{
        return false
    }
}
console.log(isMultipleOf2(20, 6))