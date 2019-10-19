const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    _id: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Student = mongoose.model('Students', StudentSchema)
