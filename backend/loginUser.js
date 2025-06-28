const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loginUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

loginUserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next(); 
    }

    try {
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password, salt); 
        next();
    } catch (err) {
        next(err);
    }
});

loginUserSchema.methods.comparePassword = async function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model('LoginUser', loginUserSchema);
