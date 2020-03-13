/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};


UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) { return next(); }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) {
      return next(err);
    }
    this.password = passwordHash;
    next();
  });
});


UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
