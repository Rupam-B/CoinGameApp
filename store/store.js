import {createStore , combineReducers} from 'redux';
import { gameReducer } from './reducers';

const rootReducers = combineReducers({
    game: gameReducer,
});

export const store = createStore(rootReducers);
