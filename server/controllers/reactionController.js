const { Reaction } = require('../model');

module.exports = {
    createReaction: async(req, res) => {
        const { reaction, username } = req.body;
        try {
            const newReaction = await Reaction.create({
                reaction,
                username,
            });
            res.json(newReaction);
        } catch (error) {
            res.json(error);
        }
    },
    getAllReactions: async(req, res) => {
        try {
            const reactions = await Reaction.find();
            res.json(reactions);
        } catch (error) {
            res.json(error);
        }
    },
    getReactionById: async(req, res) => {
        const { reactionId } = req.params;
        try {
            const reaction = await Reaction.findById(reactionId);
            res.json(reaction);
        } catch (error) {
            res.json(error);
        }
    },
    updateReactionById: async(req, res) => {
        const { reactionId } = req.params;
        try {
            const updatedReaction = await Reaction.findByIdAndUpdate(reactionId, {...req.body }, { new: true });
            res.json(updatedReaction);
        } catch (error) {
            res.json(error);
        }
    },
    deleteReactionById: async(req, res) => {
        const { reactionId } = req.params;
        try {
            const deletedReaction = await Reaction.findByIdAndDelete(reactionId);
            res.json(deletedReaction);
        } catch (error) {
            res.json(error);
        }
    }
}