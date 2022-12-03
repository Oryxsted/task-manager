import { createStore, combineReducers } from 'redux';
import { reducer } from './cashReducer';
import { popupReducer } from './popupReducer';
import { tabsReducer } from './tabsReducer';


const rootReducer = combineReducers({
    cash: reducer,
    popup: popupReducer,
    tabs: tabsReducer,
});

export const store = createStore(rootReducer);