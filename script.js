function atualizarRelogio() {
    const agora = new Date();
  
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
  
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    const diaSemana = diasSemana[agora.getDay()];
  
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
  
    document.getElementById('data').textContent = dataFormatada;
    document.getElementById('relogio').textContent = horarioFormatado;
  }
  
  atualizarRelogio(); // Atualiza imediatamente
  setInterval(atualizarRelogio, 1000); // Atualiza a cada segundo
  