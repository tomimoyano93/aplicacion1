import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import Header from '../../components/header';
import Card from '../../components/card';

import { styles } from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.container}> 
            <Header title='Adivina el número' />
            <Card>
                <Text style={styles.cardTitle}>Empezar Juego</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Elija un número</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='11' 
                        placeholderTextColor='#52528C'
                        maxLength={2}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <Button title='Limpiar' onPress={() => null} color='#52528C'/>
                    <Button title='Confirmar' onPress={() => null} color='#52528C'/>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;