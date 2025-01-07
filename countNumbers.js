// - Write a function countNumbers that returns an object with the keys: even, odd, and zero.
// countNumbers([0, 1, 2, 3, 4, 5, 0, 6, 7, 8]); // Output: { even: 5, odd: 4, zero: 2 }

function countNumbers(arr){
    let counts = {
        even:0,
        odd:0,
        zero:0
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            counts.zero++
        }
        else if(arr[i] % 2 === 0){
            counts.even++
        }
        else{
            counts.odd++
        }
    }
    return counts
}
console.log(countNumbers([0, 1, 2, 3, 4, 5, 0, 6, 7, 8]))