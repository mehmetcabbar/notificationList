import React from 'react'
import { Text, View, Image } from 'react-native';
import { style } from './Style';


function NoNotifications() {
    return (
        <View style={style.container}>
            <Image
                style={style.tinyBell}
                source={require('../../images/bell.png')}
            />
            <Text style={style.title}>No notification yet!</Text>
            <Text style={style.content}>No worries! You can add a notification {`\n`} to your list easily. Try now!</Text>
        </View>
    )
};

export default NoNotifications;