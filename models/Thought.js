const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
{
    thoughtText:
    {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    },
    username:
    {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]

},
{
    toJSON:
    {
        virtuals: true

    },
        id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
