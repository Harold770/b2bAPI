const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://harold770:xgiC8OhtAywUiSQL@harold.edwplln.mongodb.net/b2bCommerce?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
