const mongoose = require("mongoose");
const Posts = require("../modeles/Posts");

const Post = mongoose.model('TestCollection');


exports.baseRoute = async (request, response)=> {
    response.send('server ok')
}

exports.getPost = async (request, response) => {
    const LectureTestModel = await Post.find();
    response.json(LectureTestModel);
}

//recuperation par id
exports.detail = async (request, response) => {
    let postID = request.params.id;
    await Posts.findById({ _id: postID }, (err, data) => {
if (err) {
    response.status(500).js({
        message:
        "Quelque chose c'est mal passé. Merci d'essayer plus tard.",
    });
} else {
    console.log(data);
    response.status(200).json({
        message: "ca fonctionne",
        data
    });
}
    });
};