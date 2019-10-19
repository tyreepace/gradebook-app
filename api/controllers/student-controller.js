const Student = require ('../models/student')

getStudents = async (req, res) => {
  await Student.aggregate([
    {
      $lookup: {
        from: 'grades',
        localField: '_id',
        foreignField: 'student_id',
        as: 'scores'
      }
    }
  ], (err, students) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!students.length) {
      return res
        .status(404)
        .json({ success: false, error: `Student not found` })
    }
    return res.status(200).json({ success: true, data: students })
  }).catch(err => console.log(err))
}

module.exports = { getStudents }
