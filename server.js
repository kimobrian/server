let express = require("express");
require("dotenv").config();
let port = process.env.PORT;

let app = express();
let router=express.Router();

router.get("/", (req, res)=> {
  res.json({ message: "Welcome to the Assessment API"});
});

app.use("/", router);
if(!module.parent) {
  app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`); // eslint-disable-line no-console
  });  
}


