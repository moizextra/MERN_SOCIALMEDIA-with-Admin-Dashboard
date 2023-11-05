const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator")
const bcrypt = require("bcryptjs") ;
const crypto=require("crypto");
// Here we will encrpyt the password before sending it into database(Mongodb)
const jwt=require("jsonwebtoken")
const postSchema  = new Schema(
    {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        textContent: { type: String, required: true },
        images: [String], // Array of image URLs
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
      }, { timestamps: true }
    
  );
postSchema .pre("save", async function (next) {
    if(!this.isModified("password")){
next();
    }
    // sending hashed password to Database
    this.password = await bcrypt.hash(this.password, 10); // Here 10 is salt 

})
// send JWT token
// making methods in schema 
postSchema .methods.sendjwttoken=function(){
return jwt.sign({id:this._id},process.env.JWT_SCRECT_KEY,{
    expiresIn:process.env.JWT_EXPIRES_IN
})  // sign() takes payload inside it
}
postSchema .methods.comparepassword= async function(enteredpassword){
return  await bcrypt.compare(enteredpassword,this.password)
}
// Genearting Reset Password Token
postSchema .methods.GeneratePasswordResetToken= async function(){
// Generating token
const Token=crypto.randomBytes(20).toString("hex")
  // for converting into readable String
  const cryptoToken=crypto.createHash("sha256").update(Token).digest("hex");
this.resetpasswordToken=cryptoToken;
this.resetpasswordexpire=Date.now()+15*60*1000;
return cryptoToken;

}
module.exports = mongoose.model("User", postSchema );