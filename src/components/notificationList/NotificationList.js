import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { style } from './Style'

// Redux is here
import { useSelector, useDispatch } from 'react-redux'
import { updateList } from '../../actions'

// Our components are here
import Notification from '../notification/Notification'
import NoNotifications from '../noNotifications/NoNotifications'


export const NotificationList = () => {
    const [emptyList, setEmptyList] = useState(true)
    const dispatch = useDispatch()
    const myNotifications = useSelector(state => {
        return state.notifications
    })

    const handleDelete = (id) => {
        const newList = myNotifications.filter(
            (item) => item.id !== id)
        dispatch(updateList(newList))
    }

    return (
        <View style={style.container}>
            {myNotifications.length === 0 ? (
                <NoNotifications />
            ) : (
                <FlatList
                    data={myNotifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Notification
                            title={item.title}
                            content={item.content}
                            onPress={() => handleDelete(item.id)}
                        />
                    )}
                    ListFooterComponent={() => <View style={style.flatlistBottom}></View>}
                />
            )}
        </View>
    )
}

export default NotificationList