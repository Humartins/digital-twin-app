import sensoresBase from '../../../mock/sensors.json';
import {gerarValorStatus} from '../../../utils/generateSensorData'

export function getSensoresComDados() {
  return sensoresBase.map(sensor => {
    let tipoDetectado = '';
    if (sensor.nome.toLowerCase().includes('press')) tipoDetectado = 'pressao';
    else if (sensor.nome.toLowerCase().includes('magn')) tipoDetectado = 'magnetico';
    else if (sensor.nome.toLowerCase().includes('indut')) tipoDetectado = 'indutivo';

    const { valor, status } = gerarValorStatus(tipoDetectado);
    return { ...sensor, valor, status };
  });
}
