const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    comment: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;