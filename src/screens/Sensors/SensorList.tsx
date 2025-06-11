import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../../../styles';
import { SensorsStyles } from './style';
import sensoresMock from '../../mock/sensors.json' with { type: "json" };

interface Sensor {
  id: string;
  nome: string;
  valor: string;
  status: 'OK' | 'Alerta';
}

export default function SensorList() {
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    const adaptado: Sensor[] = sensoresMock.map((sensor) => ({
      id: sensor.id,
      nome: sensor.nome,
      valor: sensor.valor,
      status: sensor.status === 'OK' ? 'OK' : 'Alerta',
    }));
    setSensors(adaptado);
  }, []);

  const renderSensor = ({ item }: { item: Sensor }) => (
    <View style={SensorsStyles.card}>
      <Text style={SensorsStyles.name}>{item.nome}</Text>
      <Text style={SensorsStyles.value}>Valor: {item.valor}</Text>
      <Text style={[
        SensorsStyles.status,
        item.status === 'OK' ? SensorsStyles.ok : SensorsStyles.alerta
      ]}>
        Status: {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sensors}
        renderItem={renderSensor}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
