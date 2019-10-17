import React, { Component } from 'react';

const PROFILE_IMAGE = "https://i1.wp.com/tavistockconsulting.co.uk/wp-content/uploads/2017/09/profile-icon-9.png?ssl=1";

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="user-container">
                    <img src={PROFILE_IMAGE} alt="profile"/>
                    <h6>Yan Kuzminski</h6>
                </div>
            </div>
        );
    }
}

export default User;