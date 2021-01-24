import createDataContext from './createDataContext';
import trackerApi        from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({email, password}) => {
    try {
      console.log({email, password});
      const response = await trackerApi.post('signup', {email, password});
      console.log(response.data);
    } catch (e) {
      console.log('in err');
      console.log(e.message)
    }
  };
};


const signIn = (dispatch) => {
  return ({email, password}) => {
    // make api request

    // modify the state
  };
};

const logOut = (dispatch) => {
  return ({}) => {
    // make api request

    // modify the state
  };
};
export const {Provider, Context} = createDataContext(
  authReducer,
  {signIn, signUp, logOut},
  {isSingedIn: false}
);
