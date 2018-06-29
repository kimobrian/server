let express = require("express");
require("dotenv").config();
let port = process.env.PORT;

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let router=express.Router();

router.get("/", (req, res)=> {
  res.json({ message: "Welcome to the Assessment API"});
});

require("./assessments")(router);

app.use("/", router);
if(!module.parent) {
  app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`); // eslint-disable-line no-console
  });  
}

module.exports = app;


