import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const CaptureSchema = new mongoose.Schema({
  pokemon: {
    type: String,
    required: true,
  },
  capturedAt: {
    type: Date,
    default: Date.now,
  },
  moveList: [
    {
      name: {
        type: String,
      },
    },
  ],

});

CaptureSchema.plugin(mongoosePaginate);

mongoose.model('Capture', CaptureSchema);
