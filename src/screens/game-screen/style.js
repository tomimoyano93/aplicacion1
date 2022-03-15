import { StyleSheet } from 'react-native'
import { fontSize, colors, margin } from '../../constants/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        flexGrow: 0.3,
    },
    confirmedText: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.primary,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.text,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.medium,
    }
})