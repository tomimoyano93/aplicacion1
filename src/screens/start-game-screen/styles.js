import { StyleSheet } from 'react-native'
import { fontSize, margin, colors } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.text,
    },
    inputContainer: {
        flex: 1,
        flexGrow: 0.6,
        marginHorizontal: margin.medium,
    },
    input: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        color: colors.primary,
        marginBottom: margin.small,
        fontSize: 30,
        alignSelf: 'center',
    },
    label: {
        fontSize: fontSize.text,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: margin.small4,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex: 1,
        flexGrow: 0.18,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.medium,
    }
});