const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  description: String,
  cover:[String],
  author: [{
    type:Schema.Types.ObjectId,
    ref:'Band'
  }]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Project', projectSchema);
