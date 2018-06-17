import React from 'react';
import './BucketItem.css';

class BucketItem extends React.Component {

    removeGoal(id) {
        this.props.removeGoal(id);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        {this.props.goal}
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-info" onClick={(event) => this.removeGoal(this.props.id)}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BucketItem;