const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GradeSchema = new Schema(
  {
    student_id: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = Grade = mongoose.model('Grades', GradeSchema)
