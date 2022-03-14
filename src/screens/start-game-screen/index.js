import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { colors } from '../../constants/theme';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';
import { styles } from './styles';

const StartGameScreen = () => {
    const handleOnChange = (text) => {
        console.warn(text);
    }
    return (
        <View style={styles.container}> 
            <Header title='Adivina el número' />
            <Card>
                <Text style={styles.cardTitle}>Empezar Juego</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Elija un número</Text>
                    <Input 
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        placeholder='Ej: 11' 
                        placeholderTextColor={colors.placeholderColor}
                        maxLength={2}
                        handleOnChange={(value) => handleOnChange(value)}
                        returnKeyType='done'
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