import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import boards from './boards_reducer';
import games from './games_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  boards,
  games
});

export default RootReducer;