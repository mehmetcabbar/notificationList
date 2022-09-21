import { StyleSheet } from "react-native";
import color from "../../../constants/Color";

export const style = StyleSheet.create({
    container: {
        backgroundColor: color.APP_COLOR,
        marginHorizontal: 14,
        marginVertical: 14,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 58 / 2,
    },
    title: {
        color: color.SECOND_COLOR,
        fontWeight: 'bold' || 700,
        fontSize: 14
    }
});