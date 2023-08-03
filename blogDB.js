require("dotenv").config();
const connectDB = require("./db/connect");
const blogSchema = require("./models/blog");
const blog = require("./blog.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await blogSchema.create(blog);
        console.log("success!!!");
    } catch (error) {
        console.log(error);
    }
};

start();