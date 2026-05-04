const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
// Import the express framework we installed via npm
const express = require('express');
// Import cors which allows our frontend to make requests to this backend
const cors = require('cors');
// Import mongoose to connect to MongoDB
const mongoose = require('mongoose');

// Import the student routes
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const classRoutes = require('./routes/classRoutes');
const feeRoutes = require('./routes/feeRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const profileRoutes = require('./routes/profileRoutes');
const resultRoutes = require('./routes/resultRoutes');
const settingRoutes = require('./routes/settingRoutes');

// Initialize the express app
const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
if (!process.env.MONGO_URI) {
  console.error('❌ Error: MONGO_URI is not defined in .env file');
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas successfully!'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    if (err.message.includes('authentication failed')) {
      console.error('👉 Please check if your database password in .env is correct.');
    }
  });

// --- ROUTES ---
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/settings', settingRoutes);

app.get('/', (req, res) => {
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
      ${status !== 1 ? '<p style="color: red;">Note: If disconnected, please check your .env file and MongoDB IP Whitelist.</p>' : ''}
    </div>
  `);
});

// --- SERVER START ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
