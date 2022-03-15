import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './style'
import Card from '../../components/card'
import Header from '../../components/header'
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else return rndNum;
}

const GameScreen = ({ userOptions }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOptions))

    return (
        <View style={styles.container}>
            <Header title='Juego Iniciado' />
            <Card style={styles.cardContainer}>
                <Text style={styles.cardTitle}>La suposición del oponentes</Text>
                <Text style={styles.confirmedText}>{currentGuess}</Text>
                <View style={styles.buttonsContainer}>
                    <Button title='Menor' onPress={() => null} color='#52528C'/>
                    <Button title='Mayor' onPress={() => null} color='#52528C'/>
                </View>            
            </Card>
        </View>
    )
} 

export default GameScreen;