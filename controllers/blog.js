require("dotenv").config();
const blogs = require("../models/blog");
const {MongoClient} = require("mongodb");


const getBlogs = async (req,res) => {
    try {
        const myBlog = await blogs.find();
        res.json(myBlog); 
    } catch (error) {
        res.json({message : error.message});
    }
}


const getOne = async (req,res) => {
    try {
        const myBlog = await blogs.findById(req.params.id);
        res.json(myBlog);
    }
    catch (error) {
        res.status(500).json({message : error.message});
    }
}


const postBlogs = async (req,res) => {
    try {
        const blog = req.body;
        const Blog = new MongoClient(process.env.MONGODB_URL).db("TheBlog");
        Blog.collection("blogs").insertOne(blog);
        res.status(200).json({message : "inserted"});
    } catch(error) {
        res.status(400).json({message:error.message});
    }
}


const deleteBlogs = async (req,res) => {
    try {
        const id = req.params.id;
        const blog = await blogs.findByIdAndDelete(id);
        res.send(`Document has been deleted`)
    } catch(error) {
        res.status(400).json({message:error.message});
    }
}


module.exports = {getBlogs,getOne,postBlogs,deleteBlogs};
