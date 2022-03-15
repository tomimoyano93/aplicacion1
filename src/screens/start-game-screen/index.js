import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from 'react-native';
import { colors } from '../../constants/theme';
import Header from '../../components/header';
import Card from '../../components/card';
import Input from '../../components/input';
import { styles } from './styles';


const isIOS = Platform.OS === 'ios';


const StartGameScreen = ({ onStartGame }) => {
    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    
    const handleOnChange = (text) => {
        setInputValue(text.replace(/[^0-9]/g, ''));
    }

    const handleResetInput = () => {
        setInputValue('');
        setConfirmed(false);
    }

    const handleConfirmInput = () => {
        const chosenNumber = parseInt(inputValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setInputValue('');
    }

    const confirmedOutput = confirmed ? (
        <Card style={styles.containerConfirmed}>
            <Text style={styles.cardTitle}>Tu Selección</Text>
            <Text style={styles.confirmedText}>{selectedNumber}</Text>
            <Button title='Empezar Juego' onPress={() => onStartGame(selectedNumber)} color='#52528C'/>
        </Card>
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView 
                behavior={isIOS ? '' : 'height'}
                style={styles.container}
            >
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
                                value={inputValue}
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title='Limpiar' onPress={() => handleResetInput()} color='#52528C'/>
                            <Button title='Confirmar' onPress={() => handleConfirmInput()} color='#52528C'/>
                        </View>
                    </Card>
                    {confirmedOutput}
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;