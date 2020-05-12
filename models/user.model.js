const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3 
    },
    password:{
        type: String,
        default:''
    }
    
});

userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validatePassword = (password)=> {
    return bcrypt.compareSync(password, this.password);
};

const USER = mongoose.model('User' , userSchema);
module.exports = USER;