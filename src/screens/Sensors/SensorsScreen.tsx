import React from 'react';
import { View} from 'react-native';
import { styles } from '../../../styles';
import SensorList from './SensorList';

export default function SensorScreen() {
  return (
    <View style={styles.container}>
      <SensorList/>
    </View>
  );
}