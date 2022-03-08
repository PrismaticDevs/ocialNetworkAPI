const { Comment } = require('../model');

module.exports = {
    createComment: async(req, res) => {
        const { comment, username } = req.body;
        try {
            const newComment = await Comment.create({
                comment,
                username,
            });
            res.json(newComment);
        } catch (error) {
            res.json(error);
        }
    },
    getAllComments: async(req, res) => {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (error) {
            res.json(error);
        }
    },
    getCommentById: async(req, res) => {
        const { commentId } = req.params;
        try {
            const comment = await Comment.findById(commentId);
            res.json(comment);
        } catch (error) {
            res.json(error);
        }
    },
    updateCommentById: async(req, res) => {
        const { commentId } = req.params;
        try {
            const updatedComment = await Comment.findByIdAndUpdate(commentId, {...req.body }, { new: true });
            res.json(updatedComment);
        } catch (error) {
            res.json(error);
        }
    },
    deleteCommentById: async(req, res) => {
        const { commentId } = req.params;
        try {
            const deletedComment = await Comment.findByIdAndDelete(commentId);
            res.json(deletedComment);
        } catch (error) {
            res.json(error);
        }
    }
}