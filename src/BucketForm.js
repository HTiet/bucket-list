import React from 'react';
import './BucketForm.css';

class BucketForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Add your bucket list goal!" />
                        </div>
                        <button type="button" className="btn btn-info">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BucketForm;