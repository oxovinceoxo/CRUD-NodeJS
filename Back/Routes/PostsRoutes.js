const mongoose = require("mongoose");

const Post = mongoose.model('TestCollection');
const express = require('express');
const  router  = express.Router();
const Posts = require("../modeles/Posts");

// import du fichier controller et sa fonction 
const postController = require('../Controllers/PostController');

router.get('/', postController.baseRoute);

router.get('/getPost', postController.getPost);

router.get('/getPost/:id', postController.detail);