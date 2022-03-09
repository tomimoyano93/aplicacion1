import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import Header from '../../components/header';

import { styles } from './styles';

const StartGameScreen = () => {
    return (
        <View style={styles.container}> 
            <Header title='Adivina el número' />
            <Text>Start Game Screen</Text>
        </View>
    )
}

export default StartGameScreen;