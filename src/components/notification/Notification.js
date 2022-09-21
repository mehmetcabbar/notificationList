import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { style } from './Style'

function Notification({ title, content, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.content}>{content}</Text>
        </TouchableOpacity>
    )
}

export default Notification