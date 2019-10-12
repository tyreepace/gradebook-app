const Grade = require ('../models/grade')

getGrades = async (req, res) => {
  await Grade.find({}, (err, grades) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!grades.length) {
      return res
        .status(404)
        .json({ success: false, error: `Student not found` })
    }
    return res.status(200).json({ success: true, data: grades })
  }).catch(err => console.log(err))
}

module.exports = { getGrades }
