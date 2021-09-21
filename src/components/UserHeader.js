import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        // console.log("User", this.props.users)

        const user = this.props.users.find(user => user.id === this.props.userId);

        if (!user) {
            return null;
        }
        return (
            <h1>{user.name}</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}


export default connect(mapStateToProps, { fetchUser })(UserHeader);