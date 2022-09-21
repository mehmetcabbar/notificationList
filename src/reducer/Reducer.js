export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_LIST':
            return {
                ...state,
                notifications: action.payload
            }
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications: action.payload
            }
        default:
            return state
    }
}