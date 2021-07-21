
// const { it, expect } = require("@jest/globals");
const { it } = require("@jest/globals");
const Employee = require("../classes/Employee.js");

describe("Employee",()=>{
    describe("Initialization",()=>{
        it("should return an object with name,id, and email properties",()=>{
            const employeeObj = {
                name: "Alisha",
                id:"12345",
                email:"email@email.com"
            }
           
            const obj = new Employee("Alisha","12345","email@email.com");
            const result = obj;
            expect(result).toEqual(employeeObj);
        })
    })
    describe("getName",()=>{
        it("should return the Employee objects 'name'value ",()=>{
            const employeeObj = {
                name: "Alisha",
                id:"12345",
                email:"email@email.com"
            }
            const obj = new Employee(employeeObj.name,"12345","email@email.com");
            const result = obj;
            expect(result).toEqual(employeeObj);

        })
    })
    describe("getId",()=>{
        it("should return the Employee objects 'id'value ",()=>{
            const employeeObj = {
                name: "Alisha",
                id:"12345",
                email:"email@email.com"
            }
            const obj = new Employee("Alisha",employeeObj.id,"email@email.com");
            const result = obj;
            expect(result).toEqual(employeeObj);

        })
    })
    describe("getEmail",()=>{
        it("should return the Employee objects 'email'value ",()=>{
            const employeeObj = {
                name: "Alisha",
                id:"12345",
                email:"email@email.com"
            }
            const obj = new Employee("Alisha","12345",employeeObj.email);
            const result = obj;
            expect(result).toEqual(employeeObj);

        })
    })



})