const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const classRoutes = require('./routes/classRoutes');
const feeRoutes = require('./routes/feeRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const resultRoutes = require('./routes/resultRoutes');
const settingRoutes = require('./routes/settingRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Cached DB connection (VERY IMPORTANT for Vercel)
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
  }
};

// ✅ Ensure DB connects before every request
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/settings', settingRoutes);

// Root Route
app.get('/', async (req, res) => {
  await connectDB();

  const status = mongoose.connection.readyState;

  const statusMessages = {
    0: '❌ Disconnected',
    1: '✅ Connected to MongoDB Atlas',
    2: '⏳ Connecting...',
    3: '🔌 Disconnecting...',
  };

  res.send(`
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Welcome to the School Hub Pro Backend API!</h1>
      <p style="font-size: 1.2rem;">
        Database Status: <strong>${statusMessages[status] || 'Unknown'}</strong>
      </p>
      ${status !== 1 ? '<p style="color: red;">Check MongoDB & env variables</p>' : ''}
    </div>
  `);
});

// ❌ NO app.listen() on Vercel
module.exports = app;

// For local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}