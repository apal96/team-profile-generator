
const { it, expect } = require("@jest/globals");
const Employee = require("./classes/Employee.js");

describe("Employee",()=>{
    describe("Initialization",()=>{
        it("should return an object with name,id, email properties",()=>{
            const empName = "Alisha";
            const empId = "12345";
            const empEmail = "email@email.com"
            const obj = new Employee(empName,empId,empEmail);
            const result = obj;
            expect(result)
        })
    })
})