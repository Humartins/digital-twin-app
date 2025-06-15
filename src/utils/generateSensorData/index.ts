import sensoresBase from '../../mock/sensors.json';

export type Sensor = {
  id: string;
  nome: string;
  tipo: string;
  valor: string;
  status: 'OK' | 'Alerta';
};

export async function generateSensorData(): Promise<Sensor[]> {
  return sensoresBase.map((sensor) => {
    let valor = '';
    let status: 'OK' | 'Alerta' = 'OK';

    switch (sensor.tipo) {
      case 'pressao':
        const pressao = parseFloat((Math.random() * 10 + 1).toFixed(2));
        valor = `${pressao} bar`;
        if (pressao > 9) status = 'Alerta';
        break;

      case 'magnetico':
      case 'indutivo':
        const ativo = Math.random() > 0.5;
        valor = ativo ? 'Ativado' : 'Desativado';
        if (!ativo) status = 'Alerta';
        break;

      default:
        valor = 'Desconhecido';
    }

    return {
      ...sensor,
      valor: String(valor),
      status: String(status) as 'OK' | 'Alerta',
    };
  });
}
