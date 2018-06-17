import React from 'react';
import './BucketForm.css';

class BucketForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addGoal = this.addGoal.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addGoal(goal) {
        if (goal.length > 0) {
            this.props.addGoal(goal);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input onChange={this.handleChange} type="text" value={this.state.value} className="form-control" placeholder="Add your bucket list goal!"/>
                        </div>
                        <button onClick={() => this.addGoal(this.state.value)} type="button" className="btn btn-info">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BucketForm;