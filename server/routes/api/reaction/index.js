const router = require('express').Router();
const { getAllReactions, getReactionById, createReaction, updateReactionById, deleteReactionById } = require('../../../controllers/reactionController');

router.route('/')
    .get(getAllReactions)
    .post(createReaction)

router.route('/:reactionId')
    .get(getReactionById)
    .put(updateReactionById)
    .delete(deleteReactionById)

module.exports = router;