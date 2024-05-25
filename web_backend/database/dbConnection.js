import mongoose  from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,
        {
            dbName:"mern_HMS",
        }).then(()=>{
            console.log("connected to database");
        }).catch(err=>{
            console.log("error occured:",err);
        })
}