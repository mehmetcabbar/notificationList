import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

// Redux is here
import { useDispatch, useSelector } from 'react-redux'

// Our npm packages
import uuid from 'react-native-uuid';
import { loremIpsum } from "lorem-ipsum";

// Components are here
import MyButton from '../common/myButton/MyButton'
import { addNotification } from '../../actions'
import Spinner from '../common/spinner/Spinner';


export const AddNotification = () => {
    const [show, setShow] = useState(false);
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const id = uuid.v4();

    useEffect(() => {
        setShow(false)
    });

    const handleAddNotification = () => {
        setShow(true)
        const newNotification = {
            id,
            title: loremIpsum({
                wordsPerSentence: {
                    max: 2,
                    min: 1
                }
            }),
            content: loremIpsum({
                wordsPerSentence: {
                    max: 2,
                    min: 1
                }
            })
        }
        dispatch(addNotification([...notifications, newNotification]));
    };

    return (
        <View>
            <MyButton
                onPress={handleAddNotification}
                title={show ? <Spinner /> : 'Add notification'}
            />
        </View>
    )
}

export default AddNotification;