const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thought: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;