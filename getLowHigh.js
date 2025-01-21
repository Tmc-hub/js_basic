function getLowHigh(arr,target){
    let low = []
    let high = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < target){
            low.push(arr[i])
        }else if(arr[i] > target){
            high.push(arr[i])
        }
    }
    return {low, high}
}
console.log(getLowHigh([1,2,3,4,5,6], 4))

function sayMyName(schoolId){
    const students = [
       {schoolId: 1, firstName: "Marco", lastName: "Seo", class: "QA"},
        {schoolId: 2, firstName: 'Phil', lastName: 'Lee', class: 'QA'},
        {schoolId: 3, firstName: 'Joshua', lastName: 'Lee', class: 'kids-coding'},
        {schoolId: 4, firstName: 'Tae', lastName: 'Cho', class: 'QA'},
        {schoolId: 5, firstName: 'In-chan', lastName: 'Choi', class: 'QA'}
    ]
    for(let i = 0; i < students.length; i++){
        if(students[i].schoolId === schoolId){
            return "you are " + students[i].firstName + " " + students[i].lastName
        }
    }
}
const result = sayMyName(4)
console.log(result)