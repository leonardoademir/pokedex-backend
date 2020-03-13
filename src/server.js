import mongoose from 'mongoose';
import app from './app';

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(3333);
