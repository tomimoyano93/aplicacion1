import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Card = ({ children, style }) => {
    return (
        <View style={{ ...style , ...styles.card, }}>
            {children}
        </View>
    )
}

export default Card;