const mongoose = require('mongoose');
const { Schema } = mongoose;

const enigmaSchema = new Schema({
    title: {
        type:String
    },
    number: {
        type:number
    },    
    description:{
        type:String
    },
    image:{
        type:String
    },
    team:{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    solved: {
        type:boolean
    }
    
});

const Enigma = mongoose.model('Enigma', enigmaSchema)

module.exports = Enigma