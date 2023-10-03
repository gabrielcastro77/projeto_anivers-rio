AOS.init();

const dataDoAniversário = new Date("Oct, 5, 2023 19:00:00");

const timeStampDoAniversário = dataDoAniversário.getTime();

const contador = setInterval(function() {
    const dataAtual = new Date();
    const timeStampDataAtual = dataAtual.getTime();
    
    const distanciaAteOAniversário = timeStampDoAniversário - timeStampDataAtual;

    const diaEmMs = 1000 * 60 * 60 * 24; 
    const horaEmMs = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversário = Math.floor(distanciaAteOAniversário / diaEmMs);
    const horasAteOAniversário = Math.floor((distanciaAteOAniversário % diaEmMs) / horaEmMs);
    const minutosAteOAniversário = Math.floor((distanciaAteOAniversário % horaEmMs) / minutoEmMs);
    const segundosAteOAniversário = Math.floor((distanciaAteOAniversário % minutoEmMs) / 1000);
    
    document.getElementById('contador').innerHTML = `${diasAteOAniversário}d ${horasAteOAniversário}h ${minutosAteOAniversário}m ${segundosAteOAniversário}s`;

    if (distanciaAteOAniversário < 0) {
        clearInterval(contador)
        document.getElementById('contador').innerHTML = 'Aniversário realizado!';
    }

}, 1000);

