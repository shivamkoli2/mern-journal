import React, { Component } from 'react';
import axios from 'axios';

export default class Journal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/submissions/')
      .then(response => {
        this.setState({ submissions: response.data.filter(submission => submission.status === 'Approved') })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h3>Journal</h3>
        {this.state.submissions.map(submission => (
          <div key={submission._id}>
            <h4>{submission.title}</h4>
            <p>{submission.author}</p>
            <a href={submission.filePath}>View File</a>
          </div>
        ))}
      </div>
    )
  }
}
