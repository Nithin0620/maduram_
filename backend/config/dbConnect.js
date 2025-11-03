const mongoose = require("mongoose");
require("dotenv").config();


exports.connectDB = ()=>{
   const uri = process.env.DATABASE_URL;
   if (!uri) {
      console.log("DATABASE_URL is not set. Skipping database connection.");
      return;
   }

   mongoose.connect(uri)
      .then(()=>{
         console.log("DataBase connected Successfully");
      })
      .catch((e)=>{
         console.log("Error occured in DataBase Connection Process.");
         console.log(e);
         process.exit(1);
      })
}
