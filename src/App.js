import React, { Component } from 'react';
import './App.css';
import BucketForm from './BucketForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bucket List</h1>
        </header>

        <BucketForm />

      </div>
    );
  }
}

export default App;
