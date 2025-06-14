import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ListaHorizontal from '../../../components/ListaHorizontal';

const SensorScreen = () => {
  const data = [
    '#FF6633',
    '#FFb399',
    '#FF33FF'
  ];
  return (
    <SafeAreaView>
        <ListaHorizontal data={data} />
    </SafeAreaView>
  );
};

export default SensorScreen;
