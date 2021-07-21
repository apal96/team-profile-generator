const Engineer = require("../classes/Engineer.js")

describe("Engineer",()=>{
    describe("Initialization",()=>{
        it("should return an object with name,id, and email properties",()=>{
            const engineerObj = {
                name: "Alisha",
                id:"12345",
                email:"email@email.com",
                github:"github"
            }
           
            const obj = new Engineer("Alisha","12345","email@email.com","github");
            const result = obj;
            expect(result).toEqual(engineerObj);
        })
    })
    // describe("getName",()=>{
    //     it("should return the Employee objects 'name'value ",()=>{
    //         const employeeObj = {
    //             name: "Alisha",
    //             id:"12345",
    //             email:"email@email.com"
    //         }
    //         const obj = new Employee(employeeObj.name,"12345","email@email.com");
    //         const result = obj;
    //         expect(result).toEqual(employeeObj);

    //     })
    // })
    // describe("getId",()=>{
    //     it("should return the Employee objects 'name'value ",()=>{
    //         const employeeObj = {
    //             name: "Alisha",
    //             id:"12345",
    //             email:"email@email.com"
    //         }
    //         const obj = new Employee("Alisha",employeeObj.id,"email@email.com");
    //         const result = obj;
    //         expect(result).toEqual(employeeObj);

    //     })
    // })
    // describe("getEmail",()=>{
    //     it("should return the Employee objects 'name'value ",()=>{
    //         const employeeObj = {
    //             name: "Alisha",
    //             id:"12345",
    //             email:"email@email.com"
    //         }
    //         const obj = new Employee("Alisha","12345",employeeObj.email);
    //         const result = obj;
    //         expect(result).toEqual(employeeObj);

    //     })
    // })



})