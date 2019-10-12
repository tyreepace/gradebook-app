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
      console.log(resp[0].data);
      this.setState({
        students: resp[0].data,
        grades: resp[1].data
      })
    });
  }

  formatGradesData() {
    let obj = this.state.grades[0];
    let names = Object.keys(obj);
    console.log(names);
  }

  renderTableData() {
    return this.state.students.map((student, i) => {
      const { id, firstname, lastname } = student;

      return (
        <div className="list-row" key={id}>
          <div className="cell student-info">
            <div className="name">
              <span className="name-block">{firstname}</span>
              <span>{lastname}</span>
            </div>
            <div className="average-grade">85%</div>
          </div>
        </div>
      );
    });
  }

  renderScoreData() {
    this.formatGradesData();
    return this.state.grades.map((test, i) => {
      return (
        <div className="list-row" key={test.studentId}>
          <div className="cell">{test.chapter1Test}</div>
          <div className="cell">{test.chapter2Test}</div>
          <div className="cell">{test.chapter3Test}</div>
          <div className="cell">{test.chapter4Test}</div>
          <div className="cell">{test.chapter5Test}</div>
          <div className="cell">{test.chapter6Test}</div>
          <div className="cell">{test.chapter7Test}</div>
          <div className="cell">{test.chapter8Test}</div>
          <div className="cell">{test.chapter9Test}</div>
          <div className="cell">{test.chapter10Test}</div>
        </div>
      )
    })
  }



  render () {
    return (
      <div>
        <h1>Gradebook Sample App</h1>
        <div className="resource-list">
          <div className="list-row list-header">
            <div className="column-spacer"></div>
          </div>
          {this.renderTableData()}

          {this.renderScoreData()}

        </div>
      </div>
    )
  }

}

export default Table;
