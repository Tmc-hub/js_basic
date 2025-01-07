// - Write a function findMinMax that returns an object with the keys: min and max.
// findMinMax([3, 1, 4, 1, 5, 9]); // Output: { min: 1, max: 9 }

function findMinMax(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return {min, max}
}
console.log(findMinMax([3, 1, 4, 1, 5, 9]))