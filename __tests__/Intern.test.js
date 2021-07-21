const Intern = require("../classes/Intern.js")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with name,id, and email properties", () => {
            const internObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                school:"school"
            }

            const obj = new Intern("Alisha", "12345", "email@email.com", "school");
            const result = obj;
            expect(result).toEqual(internObj);
        })
    })
    describe("getName", () => {
        it("should return the Engineer objects 'name'value ", () => {
            const internObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                school:"school"
            }
            const obj = new Intern(internObj.name, "12345", "email@email.com", "school");
            const result = obj;
            expect(result).toEqual(internObj);

        })
    })
    describe("getId", () => {
        it("should return the Engineer objects 'id'value ", () => {
            const internObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                school:"school"
            }
            const obj = new Intern("Alisha", internObj.id, "email@email.com", "school");
            const result = obj;
            expect(result).toEqual(internObj);

        })
    })
    describe("getEmail", () => {
        it("should return the Engineer objects 'email'value ", () => {
            const internObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                school:"school"
            }
            const obj = new Intern("Alisha", "12345", internObj.email, "school");
            const result = obj;
            expect(result).toEqual(internObj);

        })
    })
    describe("getSchool", () => {
        it("should return the Intern objects 'school'value ", () => {
            const internObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                school:"school"
            }
            const obj = new Intern("Alisha", "12345", "email@email.com", internObj.school);
            const result = obj;
            expect(result).toEqual(internObj);

        })
    })
})