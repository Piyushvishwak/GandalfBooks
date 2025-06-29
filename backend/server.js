const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./auth');
const session = require('express-session');

dotenv.config();

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET || 'myStrongSecret123',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
const allowedOrigins = [
  'http://localhost:3000',
  'https://gandalf-books.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  // dbName: 'userDB',
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to MongoDB', mongoose.connection.name);
}).catch((err) => {
  console.error('MongoDB connection failed:', err.message);
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
