const defaultState = {
   list: [
    {
        name: "Работа",
        content: {
            description: "Задачи по работе",
            todos: [
                {
                    title: "Тестовая задача",
                    description: "Пример описания",
                    isComplete:false,
                },
            ]
        },
        isActive: true,
    },
    {
        name: "Личное",
        content: "222",
        isActive: false,
    },
    ]
}

export const tabsReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case "ADD_NEW_TAB":          
            return {...state, list: [...state.list, action.payload]}           
        case "DELETE_TAB":
            return {...state, isOpened : false }       
        case "EDIT_TABS":
            return {...state, list : action.payload}            
        default:
            return state;
    }
}