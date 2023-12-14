// Write your solution in this file!
const employee={
    name:"Simon",
    streetAddress:"Sunton"
}

const updateEmployeeWithKeyAndValue=(employee,key,value)=>{
let newEmployee={
    ...employee
}
newEmployee.name="Sam";
newEmployee.streetAddress="11 Broadway"
 return newEmployee
}
console.log(updateEmployeeWithKeyAndValue())

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee=employee;
    newEmployee.name="Sam"
    newEmployee.streetAddress="12 Broadway"
    return newEmployee
        
    
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue())
function  deleteFromEmployeeByKey(employee, key){
    const newEmployee={
        ...employee
    }
    delete newEmployee.name
    delete newEmployee.streetAddress
    return newEmployee
}
console.log(deleteFromEmployeeByKey())
function destructivelyDeleteFromEmployeeByKey(employee, key){
let newEmployee=employee
delete newEmployee.name
    delete newEmployee.streetAddress
    return newEmployee
}