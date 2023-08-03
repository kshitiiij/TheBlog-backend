const blogs = require("../models/blog");

const getBlogs = async (req,res) => {
    const myBlog = await blogs.find({});
    res.status(200).json({myBlog});
}

module.exports = getBlogs;