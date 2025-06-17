import React, { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import ListaHorizontal from '../../../components/ListaHorizontal';
import { useSensorContext } from '../../../context/SensorContext';

const SensorScreen = () => {
  const { sensores, atualizarSensoresEEnviar } = useSensorContext();

  const atualizarDados = async () => {
    await atualizarSensoresEEnviar();
  };

  useEffect(() => {
    atualizarDados();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#180833' }}>
      <ListaHorizontal data={sensores} />

      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          margin: 10,
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={atualizarDados}
      >
        <Text style={{ fontWeight: 'bold', color: '#180833' }}>
          Atualizar Dados
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SensorScreen;
