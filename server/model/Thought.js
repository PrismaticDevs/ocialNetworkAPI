const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thought: {
        type: String,
    },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;