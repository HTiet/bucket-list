import React from 'react';
import './BucketForm.css';

class BucketForm extends React.Component {
    constructor() {
        super();
        this.addGoal = this.addGoal.bind(this);
    }

    addGoal(event) {
        event.preventDefault();
        if (event.target.item.value) {
            this.props.addGoal(event.target.item.value);
            document.getElementById("item").value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addGoal}>
                    <div className="form-row">
                        <div className="col">
                            <input id="item" name="item" type="text" className="form-control" placeholder="Add your bucket list goal!" />
                        </div>
                        <button type="submit" className="btn btn-info">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BucketForm;