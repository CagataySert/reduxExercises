import axios from 'axios';

export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: GET_USER_ERROR,
        payload: {
            error: "ERROR!!!"
        }
    }
}

export function getUsers() {
    return async dispatch => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            dispatch(updateUser(response.data.name));
        } catch (error) {
            dispatch(showError());
        }
        // axios.get('https://jsonplaceholder.typicode.com/users/1')
        //     .then(response => response.data)
        //     .then(response => dispatch(updateUser(response.name)))
        //     .catch(error => dispatch(showError()))
    }
}