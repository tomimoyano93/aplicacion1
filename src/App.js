import React from 'react';
import {
  SafeAreaView,
  Platform,
} from 'react-native';
import StartGameScreen from './screens/start-game-screen';
import { styles } from './styles';

const isIOS = Platform.OS === 'ios';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen />
    </SafeAreaView>
  );
};


export default App;
