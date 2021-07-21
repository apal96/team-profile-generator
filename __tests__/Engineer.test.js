const Engineer = require("../classes/Engineer.js")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object with name,id, and email properties", () => {
            const engineerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                github: "github"
            }

            const obj = new Engineer("Alisha", "12345", "email@email.com", "github");
            const result = obj;
            expect(result).toEqual(engineerObj);
        })
    })
    describe("getName", () => {
        it("should return the Engineer objects 'name'value ", () => {
            const engineerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                github: "github"
            }
            const obj = new Engineer(engineerObj.name, "12345", "email@email.com", "github");
            const result = obj;
            expect(result).toEqual(engineerObj);

        })
    })
    describe("getId", () => {
        it("should return the Engineer objects 'id'value ", () => {
            const engineerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                github: "github"
            }
            const obj = new Engineer("Alisha", engineerObj.id, "email@email.com", "github");
            const result = obj;
            expect(result).toEqual(engineerObj);

        })
    })
    describe("getEmail", () => {
        it("should return the Engineer objects 'email'value ", () => {
            const engineerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                github: "github"
            }
            const obj = new Engineer("Alisha", "12345", engineerObj.email, "github");
            const result = obj;
            expect(result).toEqual(engineerObj);

        })
    })
    describe("getGithub", () => {
        it("should return the Engineer objects 'github'value ", () => {
            const engineerObj = {
                name: "Alisha",
                id: "12345",
                email: "email@email.com",
                github: "github"
            }
            const obj = new Engineer("Alisha", "12345", "email@email.com", engineerObj.github);
            const result = obj;
            expect(result).toEqual(engineerObj);

        })
    })
})