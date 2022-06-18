const { Schema, model } = require('mongoose');
 
const userSchema = new Schema(
  {
    name: {
      type: String,
     /* trim: true,
      required: [true, 'Username is required.'],
      unique: true*/
    },
    age: {
        type: Number,
       /* trim: true,
        required: [true, 'Username is required.'],
        unique: true*/
      },
    email: {
      type: String,
    /*   required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true*/
    },
    hashedPassword: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);
 
const User = model('User', userSchema);

module.exports = User;