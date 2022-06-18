const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const teamSchema = new Schema(
  {
    name: {
      type: String,
     /* trim: true,
      required: [true, 'Username is required.'],
      unique: true*/
    },
    participants:{
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }

})

 
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;