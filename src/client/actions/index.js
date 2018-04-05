import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispactch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

  dispactch({
    type: FETCH_USERS,
    payload: res
  });
};
