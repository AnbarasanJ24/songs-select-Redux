import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    componentDidMount() {
    }

    render() {
        const { user } = this.props;

        if (!user) return null;

        return (
            <h1>{user.name}</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}


export default connect(mapStateToProps)(UserHeader);