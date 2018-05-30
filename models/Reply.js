const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const replySchema = new Schema({
  from:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  to:{
    type:Schema.Types.ObjectId,
    ref:"Band"
  },
  info:String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Reply', replySchema);
