import React from 'react';
import BucketItem from './BucketItem';

class BucketList extends React.Component {
    render() {
        let goalJSX = this.props.goals.map((goal) => {
            return <BucketItem  goal={goal.goal}
                                key={goal.id}
                                id={goal.id}
                                removeGoal={this.props.removeGoal}
                                />;
        })
        return (
            <div>
                {goalJSX}
            </div>
        );
    }
}

export default BucketList;