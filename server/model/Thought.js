const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thought: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;