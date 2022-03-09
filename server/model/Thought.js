const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thought: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        ref: "User",
    },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;