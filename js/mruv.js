        // Función para calcular distancia
        document.getElementById('distanceForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            const v0 = parseFloat(document.getElementById('initialVelocity').value);
            const t = parseFloat(document.getElementById('time1').value);
            const a = parseFloat(document.getElementById('acceleration').value);
            const distance = v0 * t + 0.5 * a * t * t;
            document.getElementById('results').innerHTML = `<p>Distancia: ${distance.toFixed(2)} metros</p>`;
        });

        // Función para calcular velocidad final
        document.getElementById('finalVelocityForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            const v0 = parseFloat(document.getElementById('initialVelocity2').value);
            const a = parseFloat(document.getElementById('acceleration2').value);
            const t = parseFloat(document.getElementById('time2').value);
            const finalVelocity = v0 + a * t;
            document.getElementById('results').innerHTML = `<p>Velocidad Final: ${finalVelocity.toFixed(2)} metros/segundo</p>`;
        });

        // Función para calcular tiempo
        document.getElementById('timeForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
            const d = parseFloat(document.getElementById('distance3').value);
            const v0 = parseFloat(document.getElementById('initialVelocity3').value);
            const a = parseFloat(document.getElementById('acceleration3').value);
            const time = (-v0 + Math.sqrt(v0 * v0 + 2 * a * d)) / a; // Fórmula cuadrática
            document.getElementById('results').innerHTML = `<p>Tiempo: ${time.toFixed(2)} segundos</p>`;
        });