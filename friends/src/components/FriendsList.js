import React from 'react';
import {withRouter} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        FriendsList: []
    };


getData = () => {
    axiosWithAuth()
        .get('/api/data')
        .then(res => {
            // this.setState({
            //     FriendsList: res.data.data.filter(
            //         friend => 
            //             (friend.username = {username})
            //     )
            // });
        })
        .catch(err => console.log([err]));
};

render() {
    return (
        <div>

        </div>
    )
}

}

export default FriendsList;

