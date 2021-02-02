import createDataContext from './createDataContext';
import trackerApi        from '../api/tracker';
import { AsyncStorage }  from 'react-native';
import { navigate }      from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {...state, errorMessage: '', token: action.payload};
    case 'login':
      return {...state, errorMessage: '', token: action.payload};
      case 'clear_error_message':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

const signUp = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);

    navigate('TrackList');
    dispatch({type: 'signup', payload: response.data.token});
  } catch (e) {
    dispatch({type: 'add_error', payload: e.message});
  }
};


const signIn = (dispatch) => async ({email, password}) => {
  try {
    console.log('IN SIGN IN ', email, password);
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);

    navigate('TrackList');
    dispatch({type: 'login', payload: response.data.token});
  } catch (e) {
    dispatch({type: 'add_error', payload: e.message});
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'})
};

const logOut = (dispatch) => {
  return ({}) => {
    // make api request

    // modify the state
  };
};
export const {Provider, Context} = createDataContext(
  authReducer,
  {signIn, signUp, logOut, clearErrorMessage},
  {token: null, errorMessage: ''}
);
