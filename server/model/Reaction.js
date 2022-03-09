const { mongoose, Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        maxLength: 280,
    },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;