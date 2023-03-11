import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import usersRoutes from './routes/users.js';
import complaintRoutes from './routes/complaints.js';

// variable
const CONNECTION_URL = 'mongodb+srv://jstcode_hub:jstcode_hub@jstbase.m7p5j.mongodb.net/ukk-mern?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// konfigurasi
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(bodyParser.json());

// databse
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}/test`)))
  .catch((error) => console.log(`${error} did not connect`));

// routing
app.get('/test', (req, res) => {
  res.json('test ok');
});

app.use('/users', usersRoutes);
app.use('/complaints', complaintRoutes);
