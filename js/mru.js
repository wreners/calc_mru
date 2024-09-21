// Función para calcular distancia
document.getElementById('distanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const speed = parseFloat(document.getElementById('speed1').value);
    const time = parseFloat(document.getElementById('time1').value);
    const distance = speed * time;
    document.getElementById('results').innerHTML = `<p>Distancia: ${distance} metros</p>`;
});

// Función para calcular velocidad
document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance2').value);
    const time = parseFloat(document.getElementById('time2').value);
    const speed = distance / time;
    document.getElementById('results').innerHTML = `<p>Velocidad: ${speed} metros/segundo</p>`;
});

// Función para calcular tiempo
document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const distance = parseFloat(document.getElementById('distance3').value);
    const speed = parseFloat(document.getElementById('speed3').value);
    const time = distance / speed;
    document.getElementById('results').innerHTML = `<p>Tiempo: ${time} segundos</p>`;
});