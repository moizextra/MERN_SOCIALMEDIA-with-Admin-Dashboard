const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator")
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const commentSchema = new Schema(
    {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
        textContent: { type: String, required: true },

    }
    , { timestamps: true }

);

module.exports = mongoose.model("Comment", commentSchema);

