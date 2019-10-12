const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Grade = new Schema(
  {
    studentId: { type: Number, required: true },
    chapter1Test: { type: String },
    chapter2Test: { type: String },
    chapter3Test: { type: String },
    chapter4Test: { type: String },
    chapter5Test: { type: String },
    chapter6Test: { type: String },
    chapter7Test: { type: String },
    chapter8Test: { type: String },
    chapter9Test: { type: String },
    chapter10Test: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('grades', Grade)
