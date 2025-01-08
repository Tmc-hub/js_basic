// Given an integer array nums, return an array output where output[i] 
// is the product of all the elements of nums except nums[i].
function extracoding(arr){
        let result1 = []
        for(let i = 0; i < arr.length; i++){
            let product = 1
            // console.log('first for loop', arr[i])
            for(let j = 0; j < arr.length; j++){
                // console.log('second for loop', arr[j])
                if(i !== j){
                    product = product * arr[j]
                }
            }
            result1.push(product)
        }
        return result1
    }
    console.log(extracoding([1,2,4,6]))