import React, { Component } from 'react';
import axios from 'axios';

export default class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      file: null,
    }
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onChangeFile = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('author', this.state.author);
    formData.append('file', this.state.file);

    axios.post('http://localhost:5000/submissions/add', formData, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => console.log(res.data));

    this.setState({
      title: '',
      author: '',
      file: null,
    })
  }

  render() {
    return (
      <div>
        <h3>Submit New Journal Entry</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.author}
                onChange={this.onChangeAuthor}
                />
          </div>
          <div className="form-group">
            <label>File: </label>
            <input 
                type="file" 
                className="form-control"
                onChange={this.onChangeFile}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
