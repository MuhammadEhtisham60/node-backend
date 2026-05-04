const express = require('express');
const router = express.Router();
const {
  getFees,
  getFeeById,
  createFee,
  updateFee,
  deleteFee
} = require('../controllers/feeController');

router.get('/', getFees);
router.get('/:id', getFeeById);
router.post('/', createFee);
router.put('/:id', updateFee);
router.delete('/:id', deleteFee);

module.exports = router;
