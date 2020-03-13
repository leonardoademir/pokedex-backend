/* eslint-disable class-methods-use-this */
import * as Yup from 'yup';
import mongoose from 'mongoose';

import requireDir from 'require-dir';

requireDir('../models');

const User = mongoose.model('User');

class UserController {
  async index(req, res) {
    const data = await User.find();
    res.json(data);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, email } = await User.create(req.body);
    return res.json({
      id,
      email,
    });
  }
}

export default new UserController();
