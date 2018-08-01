import React, { Component } from 'react';
import './App.css';
import BucketForm from './BucketForm.js';
import BucketList from './BucketList.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      goals: [
        {
          id: 0,
          goal: "Skydiving"
        },
        {
          id: 1,
          goal: "Spend a month in France"
        },
        {
          id: 2,
          goal: "Learn Italian"
        }
      ]
    }

    this.addGoal = this.addGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
  }

  addGoal(goal) {
    const goalsCopy = Array.from(this.state.goals)
    const newGoal = {
      id: goalsCopy[goalsCopy.length - 1].id + 1,
      goal: goal
    };
    goalsCopy.push(newGoal);
    this.setState({
      goals: goalsCopy,
    });
  }

  removeGoal(id) {
    this.setState({
      goals: this.state.goals.filter((goal, index) =>
        goal.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Bucket List</h1>
        </header>

        <BucketForm goal='' 
                    addGoal={this.addGoal} 
                    />

        <ul className="list-group">
          <BucketList goals={this.state.goals}
                      removeGoal={this.removeGoal}
          />
        </ul>

      </div>
    );
  }
}

export default App;