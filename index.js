// Write your solution in this file!
const employee= {
    name:`Levin`,
    streetAddress: `Juja`
}

function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newEmployee={...employee};
    newEmployee[key]=value
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;

    return employee;
}

function deleteFromEmployeeByKey(obj,key) {
    let newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj,key) {
    delete employee.name;
    return employee;
};