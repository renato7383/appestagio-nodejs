//var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

//module.exports = function(){

//    var userSchema = mongoose.Schema({
//        use_name : {type: String, trim: true},
//        use_email: {type: String, trim: true},
//        username : {type: String, trim: true},
//        password : {type: String, select: false},
//        data_cad : {type: Date, default: Date.now}
//    });

//    userSchema.methods.generateHash = function(password){
//        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//    }

//    return mongoose.model('user', userSchema);
//}