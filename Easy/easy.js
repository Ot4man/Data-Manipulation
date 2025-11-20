import { employees } from "../dataset.js";
// console.log(employees[0])
// ## Easy - Basic Data Retrieval
// 1. Get the first name of the first employee
//    - **Function Name**: `getFirstEmployeeFirstName`
//    - **Input**: `employees`
//    - **Output**: `"Jean"`
//    - **Expected Result**: Returns the first name of the first employee in the array.
function getFirstEmployeeFirstName(h){

const name=h[0].firstName
console.log(name)

    }

// getFirstEmployeeFirstName(employees)


//  Get the last name of the last employee
//    - **Function Name**: `getLastEmployeeLastName`
//    - **Input**: `employees`
//    - **Output**: `"Leroy"`
//    - **Expected Result**: Returns the last name of the last employee in the array.
function getLastEmployeeLastName(employees) {
    let len = employees.length;
    console.log(len);

    
   
    console.log(  employees[len-1].lastName);

}

// getLastEmployeeLastName(employees)



// 3. Get the department of employee with ID 5
//    - **Function Name**: `getEmployeeDepartmentById`
//    - **Input**: `employees, 5`
//    - **Output**: `"Marketing"`
//    - **Expected Result**: Returns the department of the employee with ID 5.

function getEmployeeDepartmentById(id){

let line=employees[id-1].department
console.log(line)

}
// getEmployeeDepartmentById(5)


// 4. Count how many employees are in the array
//    - **Function Name**: `countEmployees`
//    - **Input**: `employees`
//    - **Output**: `50`
//    - **Expected Result**: Returns the total number of employees in the array.

function countEmployees(employees){
const cont=  employees.length;
console.log(cont);

}
// countEmployees(employees);



// 5. Check if any employee is inactive (isActive: false)
//    - **Function Name**: `hasInactiveEmployees`
//    - **Input**: `employees`
//    - **Output**: `true`
//    - **Expected Result**: Returns `true` if any employee is inactive, otherwise `false`.




function hasInactiveEmployees(employees) {

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].isActive === false) {
            console.log ("ddd",true);  
        
        }
    }
; 
}
// hasInactiveEmployees(employees) 


// ## Easy - Simple Calculations
// 6. Calculate the average age of all employees
//    - **Function Name**: `calculateAverageAge`
//    - **Input**: `employees`
//    - **Output**: `31.2`
//    - **Expected Result**: Returns the average age of all employees.

function calculateAverageAge(employee){
let l =employee.length;
let somme=0
for(let i =0;i <l ;i++){
somme += employees[i].age

}
const moyenne=somme/l
console.log(moyenne)
}

// calculateAverageAge(employees)


// 7. Find the employee with the highest salary
//    - **Function Name**: `getHighestPaidEmployee`
//    - **Input**: `employees`
//    - **Output**: `{ id: 34, firstName: "Paul", lastName: "Leclercq", ... }`
//    - **Expected Result**: Returns the employee object with the highest salary.
// function getHighestPaidEmployee(){}