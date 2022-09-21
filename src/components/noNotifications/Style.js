import { StyleSheet } from "react-native";
import color from "../../constants/Color";

export const style = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        paddingTop: '50%',
        paddingHorizontal: 14,
    },
    title: {
        color: color.BLACK_COLOR,
        fontWeight: 'bold' || 700,
        fontSize: 14,
        paddingTop: 24,
    },
    content: {
        paddingTop: 8,
        color: color.TEXT_COLOR,
        textAlign: 'center'
    },
    tinyBell: {
        width: 80,
        height: 80,
        opacity: 0.5
    }
});