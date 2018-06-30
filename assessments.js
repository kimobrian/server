let assessmentList = [
  { id: "1", fellow: "Brian Kimokoti", assessor: "Williams Adu", score: "93", status: "Pass" },
  { id: "2", fellow: "Ndegwa Kimani", assessor: "Omar Mohammed", score: "92", status: "Pass" },
  { id: "3", fellow: "Sam Gaamuwa", assessor: "Tosin Adesanya", score: "90", status: "Pass" },
  { id: "4", fellow: "Joseph Muli", assessor: "Ikem Okonkwo", score: "94", status: "Pass" },
  { id: "5", fellow: "Whitney Ruoroh", assessor: "Kiura Alex", score: "91", status: "Pass" },
];

module.exports = (router) => {
  /** 
   * get all assessments
  */
  router.get("/assessments", (req, res)=> {
    res.json({ assessments: assessmentList });
  }),
  /**
   * get a single assessment using the assessment id
   */
  router.get("/assessments/:id", (req, res)=> {
    let assessmentId = req.params.id;
    let fellowDetails = assessmentList.filter(item=> item.id === assessmentId);
    return res.json({ assessment: fellowDetails[0] || []});
  });
};

