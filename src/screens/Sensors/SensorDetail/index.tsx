import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SensorDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Sensor</Text>
      {/* Aqui futuramente vai o gráfico ou histórico */}
      <Button title="Atualizar" onPress={() => console.log('Mock atualizar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default SensorDetail;
