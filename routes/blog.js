const express = require("express");
const router = express.Router();

const {getBlogs,getOne,postBlogs,deleteBlogs} = require("../controllers/blog");

//get request
router.route("/getall").get(getBlogs);

//get seperate blog
router.route("/getone/:id").get(getOne);

//post request
router.route("/post").post(postBlogs);

//delete request
router.route("/delete/:id").delete(deleteBlogs);


module.exports = router;
