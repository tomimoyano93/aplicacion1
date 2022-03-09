import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Header from './components/header';
import { styles } from './styles';


const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Bienvenidos' />
    </View>
  );
};


export default App;
