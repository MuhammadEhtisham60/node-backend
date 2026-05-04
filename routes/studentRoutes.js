const express = require('express');

// We create an Express router. A router is like a mini-app that handles only
// specific routes. In server.js, we attached this router to '/api/students'.
const router = express.Router();

// Import the controller functions
// These functions contain the actual logic of what happens when a route is hit.
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// -------------------------------------------------------------
// DEFINE ROUTES
// -------------------------------------------------------------

// Route: GET /api/students
// Description: Fetches all students
// Logic: Calls the getStudents function from the controller
router.get('/', getStudents);

// Route: GET /api/students/:id
// Description: Fetches a single student by their ID
// Logic: Calls the getStudentById function from the controller
router.get('/:id', getStudentById);

// Route: POST /api/students
// Description: Adds a new student to the database
// Logic: Calls the createStudent function from the controller
router.post('/', createStudent);

// Route: PUT /api/students/:id
// Description: Updates an existing student
router.put('/:id', updateStudent);

// Route: DELETE /api/students/:id
// Description: Deletes a student
router.delete('/:id', deleteStudent);

// Export the router so it can be imported in server.js
module.exports = router;
