const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        minLength: 4,
        maxLength: 24,
        required: [true, 'Username is required and must be a minimum of 4 and maximum of 24'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(value) {
                return isEmail(value)
            },
            message: function(userObject) {
                return `${userObject.email} is not a valid email address`
            }
        }
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought",
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
});

userSchema.virtual('friendName').get(function() {
    return this.username;
}, {
    toJSON: {
        virtuals: true
    },
    id: false,
})

const User = model('User', userSchema);

module.exports = User;