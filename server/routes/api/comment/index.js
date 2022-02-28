const router = require('express').Router();
const { getAllComments, getCommentById, createComment, updateCommentById, deleteCommentById } = require('../../../controllers/commentController');

router.route('/')
    .get(getAllComments)
    .post(createComment)

router.route('/:commentId')
    .get(getCommentById)
    .put(updateCommentById)
    .delete(deleteCommentById)

module.exports = router;