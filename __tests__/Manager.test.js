const Manager = require("../classes/Manager.js")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with name,id, and email properties", () => {
            const managerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                officeNumber:"54321"
            }
            const obj = new Manager("Alisha", "12345", "email@email.com", "54321");
            const result = obj;
            expect(result).toEqual(managerObj);
        })
    })
    describe("getName", () => {
        it("should return the Manager objects 'name'value ", () => {
            const managerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                officeNumber:"54321"
            }
            const obj = new Manager(managerObj.name, "12345", "email@email.com", "54321");
            const result = obj;
            expect(result).toEqual(managerObj);

        })
    })
    describe("getId", () => {
        it("should return the Manager objects 'id'value ", () => {
            const managerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                officeNumber:"54321"
            }
            const obj = new Manager("Alisha", managerObj.id, "email@email.com", "54321");
            const result = obj;
            expect(result).toEqual(managerObj);

        })
    })
    describe("getEmail", () => {
        it("should return the Manager objects 'email'value ", () => {
            const managerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                officeNumber:"54321"
            }
            const obj = new Manager("Alisha", "12345", managerObj.email, "54321");
            const result = obj;
            expect(result).toEqual(managerObj);

        })
    })
    describe("getOfficeNumber", () => {
        it("should return the Manager objects 'officeNumber'value ", () => {
            const managerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                officeNumber:"54321"
            }
            const obj = new Manager("Alisha", "12345", "email@email.com", managerObj.officeNumber);
            const result = obj;
            expect(result).toEqual(managerObj);

        })
    })
})