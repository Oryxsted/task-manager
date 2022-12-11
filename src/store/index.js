import { createStore, combineReducers } from 'redux';
import { popupReducer } from './popupReducer';
import { tabsReducer } from './tabsReducer';


const rootReducer = combineReducers({    
    popup: popupReducer,
    tabs: tabsReducer,
});

export const store = createStore(rootReducer);