export const UPDATE_LIST = 'UPDATE_LIST';
export const updateList = (newList) => {
    return {
        type: UPDATE_LIST,
        payload: newList
    }
};

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (newNotification) => {
    return {
        type: ADD_NOTIFICATION,
        payload: newNotification
    }
};