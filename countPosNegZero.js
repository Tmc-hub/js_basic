// - Write a function countPosNegZero that returns an object with the keys: positive, negative, and zero.
// countPosNegZero([0, -1, 2, -3, 4, 0, -5]); // Output: { positive: 2, negative: 3, zero: 2 }

function countPosNegZero(arr){
    let counts = {
        postive:0,
        negative:0,
        zero:0
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            counts.postive++
        }
        else if(arr[i] < 0){
            counts.negative++
        }
        else{
            counts.zero++
        }
    }
    return counts
}
console.log(countPosNegZero([0, -1, 2, -3, 4, 0, -5]))