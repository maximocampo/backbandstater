const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const requestSchema = new Schema({
  from: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  to: {
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  snippet1:String,
  snippet2:String,
  notes:String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Request', requestSchema);
