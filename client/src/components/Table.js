import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      grades:[]
    };
  }

  componentDidMount() {
    let url1 = 'http://localhost:3000/api/students';
    let url2 = 'http://localhost:3000/api/grades';

    let apiRequest1 = fetch(url1).then(response => response.json());
    let apiRequest2 = fetch(url2).then(response => response.json());

    Promise.all([apiRequest1, apiRequest2]).then(resp => {
      this.setState({
        students: resp[0].data,
        grades: resp[1].data
      })
    });
  }

  calculateAvgGrade(scores) {
    let total = 0;
    let index = 0;
    Object.keys(scores).forEach(key => {
      if ((key !== 'student_id') && (key !== '_id')) {
        total = total + Number(scores[key]);
        index++;
      }
    });
    return Math.round(total / index);
  }

  renderTableData() {
    return this.state.students.map((student, i) => {
      return (
        <tr className="list-row" key={student._id}>
          <td className="student-info">
            <div className="name">
              <span className="name-block">{student.firstname}</span>
              <span>{student.lastname}</span>
            </div>
            <div className="average-grade">{this.calculateAvgGrade(student.scores[0])}%</div>
          </td>
          <td className="cell scores">{student.scores[0].chapter1Test}%</td>
          <td className="cell scores">{student.scores[0].chapter2Test}%</td>
          <td className="cell scores">{student.scores[0].chapter3Test}%</td>
          <td className="cell scores">{student.scores[0].chapter4Test}%</td>
          <td className="cell scores">{student.scores[0].chapter5Test}%</td>
          <td className="cell scores">{student.scores[0].chapter6Test}%</td>
          <td className="cell scores">{student.scores[0].chapter7Test}%</td>
          <td className="cell scores">{student.scores[0].chapter8Test}%</td>
          <td className="cell scores">{student.scores[0].chapter9Test}%</td>
          <td className="cell scores">{student.scores[0].chapter10Test}%</td>
        </tr>
      );
    });
  }

  render () {
    return (
      <div className="resource-list">
        <h1>Gradebook Sample App</h1>
        <table>
          <thead className="list-row list-header">
            <tr>
              <th className="column-spacer"></th>
              <th className="column-heading">
                <div>Chapter 1 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 2 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 3 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 4 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 5 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 6 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 7 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 8 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 9 Test</div>
                <div>March 25</div>
              </th>
              <th className="column-heading">
                <div>Chapter 10 Test</div>
                <div>March 25</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Table;
