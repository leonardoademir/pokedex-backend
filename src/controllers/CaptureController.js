/* eslint-disable class-methods-use-this */
import mongoose from 'mongoose';
import requireDir from 'require-dir';

requireDir('../models');
const Capture = mongoose.model('Capture');

class CaptureController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const captures = await Capture.paginate({}, { page, limit: 10 });
    return res.json(captures);
  }

  async store(req, res) {
    const capture = await Capture.create(req.body);

    return res.json(capture);
  }
}

export default new CaptureController();
