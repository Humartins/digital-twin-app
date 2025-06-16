import React, { createContext, useContext, useState } from 'react';
import { Sensor } from '../../utils/generateSensorData';

type SensorContextType = {
  sensores: Sensor[];
  setSensores: (s: Sensor[]) => void;
  historico: Sensor[][];
  adicionarAoHistorico: (s: Sensor[]) => void;
};

const SensorContext = createContext<SensorContextType>({} as any);

export const SensorProvider = ({ children }: any) => {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [historico, setHistorico] = useState<Sensor[][]>([]);

  const adicionarAoHistorico = (dados: Sensor[]) => {
  if (
    Array.isArray(dados) &&
    dados.every(
      (s) =>
        typeof s.nome === 'string' &&
        typeof s.valor === 'string' &&
        typeof s.status === 'string'
    )
  ) {
    setHistorico((prev) => [dados, ...prev]);
  } else {
    console.warn('Tentativa de adicionar dados inválidos ao histórico:', dados);
  }
};



  return (
    <SensorContext.Provider
      value={{ sensores, setSensores, historico, adicionarAoHistorico }}
    >
      {children}
    </SensorContext.Provider>
  );
};

export const useSensorContext = () => useContext(SensorContext);
