const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  bio: String,
  location:String,
  age:String,
  gender:String,
  profilePic:String,
  influences:[String],
  instruments:[String],
  genres:[String],
  requests:[{
    type:Schema.Types.ObjectId,
    ref:"Request"
  }],
  snippets:[String],
  replies:[{
    type:Schema.Types.ObjectId,
    ref:"Reply"
  }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


userSchema.plugin(PassportLocalMongoose, {
  usernameField:"email"
});

module.exports = mongoose.model('User', userSchema);
