const Assessment = require("./models").Assessment;

module.exports = (router) => {
  /**
   * get a single assessment using the assessment id
   */
  router.get("/assessments/:id", (req, res, next)=> {
    return Assessment.findById(req.params.id)
      .then(assessment=> {
        if (!assessment) {
          return res.status(404).json({ error: true, message: "Record Not Found"});
        }
        return res.status(200).json({assessment});
      })
      .catch(err=> next(err));
  }),
  /**
   * get all assessments
  */
  router.get("/assessments", (req, res, next)=> {
    return Assessment.findAll()
      .then(assessments=> res.status(200).json({ assessments }))
      .catch(err=> next(err));
  }),
  /** 
   * Create an assessment record
  */
  router.post("/assessments", (req, res, next)=> {
    let { fellow, assessor, score, status } = req.body.assessment;
    if(!fellow || !assessor || !score || !status ) return res.status(400).json({ error: true, message: "Please provide all fields"});
    return Assessment
      .create({
        fellow,
        assessor,
        score,
        status
      })
      .then(assessment => res.status(201).json({assessment}))
      .catch((error) => {
        next(error);
      });
  });
};

