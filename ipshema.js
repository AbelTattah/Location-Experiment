const mongoose = require('mongoose');



const Schema = mongoose.Schema(
    {
        Ip:{
            type:String,
            timestamps:true
        },
        
    }
)



const Ip = mongoose.model('ip', Schema);

module.exports = Ip;