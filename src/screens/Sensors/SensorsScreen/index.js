import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import ListaHorizontal from '../../../components/ListaHorizontal';
import { getSensoresComDados } from '../SensorList';

const SensorScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sensores = getSensoresComDados();
    setData(sensores);
  }, []);
  
  return (
    <SafeAreaView style ={{
      flex:1,
      backgroundColor:'#180833'
      }}>
        <ListaHorizontal data={data} />
    </SafeAreaView>
  );
};

export default SensorScreen;
