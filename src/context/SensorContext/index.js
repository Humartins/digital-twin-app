import React, { createContext, useContext, useState, useEffect } from "react";
import { sendReading, getReadings, getSensors } from "../../api/readings";
import { generateSensorData } from "../../utils/generateSensorData";

const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [sensores, setSensores] = useState([]);
  const [historico, setHistorico] = useState([]);

  // Envia uma leitura para backend e atualiza histórico local
  const enviarLeituraBackend = async (leitura) => {
    try {
      const resposta = await sendReading(leitura);
      setHistorico((oldHistorico) => [...oldHistorico, resposta]);
    } catch (error) {
      console.error("Erro ao enviar leitura:", error);
    }
  };

  // Envia múltiplas leituras (array) para backend
  const enviarMultiplaLeitura = async (leituras) => {
    for (const leitura of leituras) {
      const dadoEnvio = {
        sensorId: leitura.id.toString(),
        value: parseFloat(leitura.valor),  // valor numérico
      };
      await enviarLeituraBackend(dadoEnvio);
    }
  };

  // Carrega histórico do backend
  const carregarHistoricoBackend = async () => {
    try {
      const dados = await getReadings();
      setHistorico(dados);
    } catch (error) {
      console.error("Erro ao carregar histórico:", error);
    }
  };

  // Carrega sensores do backend e formata para o frontend
  const carregarSensoresBackend = async () => {
    try {
      const sensoresBackend = await getSensors();
      const sensoresFormatados = sensoresBackend.map((sensor) => ({
        id: sensor.id.toString(),
        nome: sensor.nome || `Sensor ${sensor.id}`,
        tipo: sensor.tipo || "desconhecido",
        valor: "0.00",
        status: "OK",
      }));
      setSensores(sensoresFormatados);
    } catch (error) {
      console.error("Erro ao carregar sensores:", error);
    }
  };

  // Gera novos dados simulados, atualiza sensores e envia para backend
  const atualizarSensoresEEnviar = async () => {
    const novosSensores = await generateSensorData(); // já retorna formato esperado
    setSensores(novosSensores);
    await enviarMultiplaLeitura(novosSensores);
  };

  useEffect(() => {
    carregarSensoresBackend();
    carregarHistoricoBackend();
  }, []);

  return (
    <SensorContext.Provider
      value={{
        sensores,
        historico,
        setSensores,
        atualizarSensoresEEnviar,
      }}
    >
      {children}
    </SensorContext.Provider>
  );
};

export const useSensorContext = () => useContext(SensorContext);
