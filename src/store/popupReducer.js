const defaultState = {
    isOpened: false,
    title: '',
    content: '',
}

export const popupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "OPEN_POPUP":
            return {...state, isOpened : true}
        case "CLOSE_POPUP":
            return {...state, isOpened : false }
        case "SET_POPUP_CONTENT":
            return {...state, content : action.payload}
        case "SET_POPUP_TITLE":
            return {...state, title : action.payload}            
        default:
            return state;
    }
}