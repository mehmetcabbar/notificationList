import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import color from '../../../constants/Color'

function Spinner() {
    return (
        <View>
            <ActivityIndicator size="small" color={color.SECOND_COLOR} />
        </View>
    )
}

export default Spinner