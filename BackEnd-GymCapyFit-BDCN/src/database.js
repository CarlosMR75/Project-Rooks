import mongoose from "mongoose";
import config from "./config";

(async () => {
    const db = await mongoose.connect(config.mongodbURL,
        { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log("Database is connected");
        }).catch((err) => {
            console.log("Conection Failed", err);
        })
})();