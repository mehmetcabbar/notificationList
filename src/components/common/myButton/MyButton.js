import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { style } from './Style'

function MyButton({ onPress, title }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton