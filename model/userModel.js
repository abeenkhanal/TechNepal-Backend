const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const userSchema = new Schema({
    userEmail : {
        type : String,
        required : [true, 'userEmail must be provided'],
        unique : true,
        lowercase : true
    },
    userName : {
        type : String,
        required : [true, 'userName must be provided']
    },
    userPhoneNumber : {
        type : Number,
        required : [true, 'userPhoneNumber must be provided']
    },
    userPassword : {
        type : String,
        required : [true, 'userPassword must be provided'],
        minlength : 8,
        //select : false
    },
    role : {
        type : String,
        enum : ["customer","admin"],
        default : "customer"
    },
    otp : {
        type : Number,
        // select : false
    },
    isOtpVerified : {
        type : Boolean,
        // default : false,
        // select : false
    },
    cart : [{
        quantity : {
            type : Number,
            required : true
        },
        product : {type : Schema.Types.ObjectId, ref : "Product"}
    }]
},{
    timestamps : true
})

const User = mongoose.model("User", userSchema)
module.exports = User