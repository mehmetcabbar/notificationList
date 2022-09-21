import React from 'react';
import { SafeAreaView } from 'react-native';

// Redux and others here
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import { initialState } from './store';

// Our components are here
import NotificationList from './components/notificationList/NotificationList';
import AddNotification from './components/addNotification/AddNotification';

// For Redux store
const store = createStore(reducer, initialState)


function App() {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <AddNotification />
        <NotificationList />
      </SafeAreaView>
    </Provider>
  )
};

export default App;