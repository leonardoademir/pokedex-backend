import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv'

dotenv.config();

// Iniciando o DB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(process.env.PORT || 3333);
