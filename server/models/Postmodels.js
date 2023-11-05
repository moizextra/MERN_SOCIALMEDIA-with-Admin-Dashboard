const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator")
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
// Here we will encrpyt the password before sending it into database(Mongodb)
const jwt = require("jsonwebtoken")
const postSchema = new Schema(
    {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        textContent: { type: String, required: true },
        images: [{
            public_url: {
                type: String,
            },
            url: {
                type: String,
            },
        }
        ],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
      }, { timestamps: true }
    
  );

module.exports = mongoose.model("Post", postSchema);