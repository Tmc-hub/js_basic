//Numbers
const num = ([1, 2, 4, 6, 7])
const result = num.filter(filterEven)

function filterEven(num){
    return num % 2 === 1
}
console.log(result)

const num1 = ([1, 2, 3, 4, 5, 6, 7])
const result0 = num1.filter(filterOdd)

function filterOdd(num1){
    return num1 % 2 === 0
}
console.log(result0)

//Words
const longWordsOnly = (wordsArray, length) => {
    return wordsArray.filter((words) => {
        return words.length > length
    })
}
    let bigwords = ["hi", "world"]
    let result1 = longWordsOnly(bigwords, 4)
    console.log(result1)

    const shortWordsOnly = (wordsArray0, length0) => {
        return wordsArray0.filter((words0) => {
            return words0.length <= length0
        })
    }
    let shortWords = ['hi', "world", "A"]
    let result2 = shortWordsOnly(shortWords, 2)
    console.log(result2)