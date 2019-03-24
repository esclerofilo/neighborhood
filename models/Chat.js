const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: String,
    messages: [{
        message: String,
        author: String
    }]
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;