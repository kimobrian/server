let app = require("../server");
let expect = require("chai").expect;

let request = require("supertest").agent(app);
describe("Assessments Endpoints", function () {
  it("responds to v1/ with a welcome message", function(done) {
    request
      .get("/v1/")
      .expect(200)
      .expect({"message":"Welcome to the Assessment API"}, done);
  });

  it("responds with an empty array if the assessment id is missing", function(done) {
    request
      .get("/v1/assessments/34")
      .expect(200)
      .expect([], done);
  });

  it("responds with an assessment record when an existing id is suppled", function(done) {
    request
      .get("/v1/assessments/1")
      .expect(200)
      .expect({ id: "1", fellow: "Brian Kimokoti", assessor: "Williams Adu", score: "93", status: "Pass" }, done);
  });

  it("returns a body with all assessment records", function(done) {
    request
      .get("/v1/assessments/")
      .expect(200)
      .end(function(err, res){
        expect(res.body.length).to.equal(5);
        done();
      });
  });
});
