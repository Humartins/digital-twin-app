export function gerarValorStatus(tipo: string) {
  switch (tipo) {
    case 'pressao': {
      const valor = (Math.random() * 10).toFixed(1) + ' bar';
      const status = parseFloat(valor) > 7 ? 'Alerta' : 'OK';
      return { valor, status };
    }
    case 'magnetico': {
      const ativo = Math.random() > 0.5;
      return { valor: ativo ? 'Ativado' : 'Desativado', status: ativo ? 'Alerta' : 'OK' };
    }
    case 'indutivo': {
      const ativo = Math.random() > 0.5;
      return { valor: ativo ? 'Desativado' : 'Ativado', status: 'OK' };
    }
    default:
      return { valor: 'N/A', status: 'OK' };
  }
}
