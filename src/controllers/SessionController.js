/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import requireDir from 'require-dir';
import mongoose from 'mongoose';
import authConfig from '../config/auth';
import User from '../models/User';

requireDir('../models');

// const User = mongoose.model('User');


class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }


    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (await user.checkPassword(password)) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id } = user;

    return res.json({
      user: {
        id,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
