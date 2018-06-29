let app = require("../server");
let expect = require("chai").expect;

let request = require("supertest").agent(app);
describe("loading express", function () {
  it("responds to / with a welcome message", function testSlash(done) {
    request
      .get("/")
      .expect(200)
      .expect({"message":"Welcome to the Assessment API"}, done);
  });
});
