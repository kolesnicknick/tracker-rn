import createDataContext from './createDataContext';
import trackerApi        from '../api/tracker';
import { AsyncStorage }  from 'react-native';
import { navigate }        from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signup':
      return {...state, errorMessage:'', token: action.payload}
    default:
      return state;
  }
};

const signUp = (dispatch) => async ({email, password}) => {
    try {
      const response = await trackerApi.post('signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);

      navigate('TrackList');
      dispatch({ type: 'signup', payload: response.data.token });
    } catch (e) {
      dispatch({ type: 'add_error', payload: e.message });
    }
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
  {token: null, errorMessage: ''}
);
