import { StyleSheet } from "react-native";
import color from "../../constants/Color";

export const style = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        paddingVertical: 28,
        justifyContent: 'center',
        borderBottomColor: color.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    title: {
        color: color.BLACK_COLOR,
        fontWeight: 'bold' || 700,
        fontSize: 16
    },
    content: {
        paddingTop: 8,
        fontSize: 14,
        color: color.TEXT_COLOR
    }
});