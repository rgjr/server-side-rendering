export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispactch, getState, api) => {
  const res = await api.get('/users');

  dispactch({
    type: FETCH_USERS,
    payload: res
  });
};
