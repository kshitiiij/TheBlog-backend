require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const blogRoute = require("./routes/blog");
const connectDB = require("./db/connect");
const cors = require("cors");
const bodyParser = require("body-parser");

app.get('/',(req,res) => {
    res.send("server is running!");
}) 

//Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use("/blogs",blogRoute);


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => console.log(`${PORT} is listening!`))
    } catch(error) {
        console.log(error);
    }
}
start();