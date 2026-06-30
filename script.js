// =========================================================================
// El Doctor Digital - ARCHIVO JAVASCRIPT (script.js)
// Conectado con el HTML original mediante los IDs de los inputs y divs.
// =========================================================================

// Función para Consultas Médicas
function recomendarConsulta() {
    // Convertimos a minúsculas internamente para que funcione escriba como escriba el usuario,
    // garantizando la coherencia y evitando errores si ponen la primera letra en mayúscula.
    const sintoma = document.getElementById('sintomaInput').value.toLowerCase();
    const respuesta = document.getElementById('respuestaConsulta');

    // Evaluamos los malestares comunes tratables en casa
    if (sintoma.includes('dolor de cabeza') || sintoma.includes('migraña')) {
        respuesta.innerHTML = "Sugerencia: Descansa en una habitación oscura y silenciosa, colócate una compresa fría en la frente e hidrátate bien. Si usas analgésicos de venta libre, hazlo con moderación.";
    } else if (sintoma.includes('dolor de estómago') || sintoma.includes('indigestión') || sintoma.includes('empacho')) {
        respuesta.innerHTML = "Sugerencia: Evita alimentos sólidos por unas horas. Toma sorbos constantes de agua o infusión de manzanilla. Reincorpora alimentos blandos (arroz, plátano) poco a poco.";
    } else if (sintoma.includes('fiebre alta') || sintoma.includes('calentura')) {
        respuesta.innerHTML = "Sugerencia: Toma un baño con agua tibia (no fría), usa ropa ligera, mantente muy bien hidratado y descansa. Monitorea que no suba de 38.5°C o persista por más de 3 días.";
    } else if (sintoma.includes('tos seca') || sintoma.includes('dolor de garganta') || sintoma.includes('resfriado común') || sintoma.includes('gripe')) {
        respuesta.innerHTML = "Sugerencia: El descanso es clave. Bebe abundantes líquidos tibios, haz gárgaras de agua tibia con sal para la garganta y puedes usar miel para suavizar la tos.";
    } else if (sintoma.includes('estrés laboral') || sintoma.includes('ansiedad leve') || sintoma.includes('insomnio nocturno')) {
        respuesta.innerHTML = "Sugerencia: Practica la respiración diafragmática (4-7-8), tómate un descanso de las pantallas, realiza una caminata ligera y reduce el consumo de cafeína.";
    } else if (sintoma.includes('dolor muscular') || sintoma.includes('dolor de espalda') || sintoma.includes('dolor de cuello') || sintoma.includes('tirón muscular')) {
        respuesta.innerHTML = "Sugerencia: Aplica compresas calientes para relajar el músculo (o hielo si es un golpe reciente). Reposa la zona afectada y realiza estiramientos extremadamente suaves.";
    } else if (sintoma.includes('sensación de mareo') || sintoma.includes('mareo leve')) {
        respuesta.innerHTML = "Sugerencia: Siéntate o acuéstate inmediatamente para evitar caídas. Enfoca la mirada en un punto fijo, respira profundo e hidrátate despacio.";
    } else if (sintoma.includes('vómito constante') || sintoma.includes('náusea leve')) {
        respuesta.innerHTML = "Sugerencia: No comas ni bebas nada durante la primera hora tras vomitar. Después, comienza con cucharaditas de suero oral o agua cada 15 minutos para evitar la deshidratación.";
    } else if (sintoma.includes('diarrea común')) {
        respuesta.innerHTML = "Sugerencia: Lo más importante es reponer líquidos. Toma suero oral de forma constante. Evita los lácteos, grasas y azúcares; prefiere una dieta blanda (caldo de pollo, manzana cocida).";
    } else if (sintoma.includes('estreñimiento leve')) {
        respuesta.innerHTML = "Sugerencia: Incrementa de forma gradual el consumo de fibra (frutas, verduras, avena), bebe al menos dos litros de agua al día y realiza un poco de caminata para estimular el intestino.";
    } else if (sintoma.includes('acidez estomacal') || sintoma.includes('reflujo gástrico') || sintoma.includes('agruras')) {
        respuesta.innerHTML = "Sugerencia: Evita acostarte inmediatamente después de comer (espera 2 o 3 horas). Modera el consumo de grasas, picantes, cítricos y café.";
    } 
    // Alertas de gravedad indispensables (Conectores de seguridad del sistema)
    else if (sintoma.includes('dolor de pecho') || sintoma.includes('problema cardíaco') || sintoma.includes('dificultad para respirar') || sintoma.includes('falta de respiración')) {
        respuesta.innerHTML = "⚠ <strong>Atención urgente:</strong> El dolor en el pecho o la dificultad severa para respirar NO se pueden tratar en casa. Llama a emergencias o acude al hospital de inmediato.";
    } else {
        respuesta.innerHTML = "Síntoma no reconocido en el catálogo de cuidado en casa. Si te sientes muy mal, se recomienda consultar a un médico para una valoración precisa.";
    }
}

// Función para Consejos Rápidos de Salud
function darConsejo() {
    const consejo = document.getElementById('consejoInput').value.toLowerCase();
    const respuesta = document.getElementById('respuestaConsejo');

    if (consejo.includes('tos seca') || consejo.includes('dolor de garganta')) {
        respuesta.innerHTML = "Consejo rápido: Mantén tu garganta húmeda. Las infusiones de jengibre con limón y miel alivian la irritación eficazmente.";
    } else if (consejo.includes('estrés laboral') || consejo.includes('ansiedad leve')) {
        respuesta.innerHTML = "Consejo rápido: Desconéctate 10 minutos de las redes sociales, inhala en 4 tiempos, retén 4 y exhala en 4.";
    } else if (consejo.includes('dolor muscular') || consejo.includes('dolor de espalda')) {
        respuesta.innerHTML = "Consejo rápido: Una ducha con agua caliente ayuda a dilatar los vasos sanguíneos y relajar las fibras musculares tensas.";
    } else if (consejo.includes('dolor de cabeza')) {
        respuesta.innerHTML = "Consejo rápido: Masajea suavemente tus sienes con movimientos circulares y colócate un paño fresco sobre los ojos.";
    } else if (consejo.includes('sensación de mareo')) {
        respuesta.innerHTML = "Consejo rápido: Evita hacer movimientos bruscos con la cabeza y levántate muy despacio si estás acostado o sentado.";
    } else if (consejo.includes('fiebre alta')) {
        respuesta.innerHTML = "Consejo rápido: No te abrigues en exceso; esto atrapa el calor corporal. Usa ropa ligera de algodón.";
    } else if (consejo.includes('vómito constante') || consejo.includes('diarrea común') || consejo.includes('náusea leve')) {
        respuesta.innerHTML = "Consejo rápido: Prioriza el suero oral por encima del agua sola, ya que necesitas recuperar los electrolitos perdidos.";
    } else if (consejo.includes('acidez estomacal') || consejo.includes('dolor de estómago')) {
        respuesta.innerHTML = "Consejo rápido: Prueba dormir del lado izquierdo y con la cabecera de la cama ligeramente elevada para reducir el reflujo nocturno.";
    } else if (consejo.includes('estreñimiento leve')) {
        respuesta.innerHTML = "Consejo rápido: Añadir una cucharada de semillas de chía o linaza hidratadas en agua a tu rutina diaria ayudará a regular tu digestión.";
    } else {
        respuesta.innerHTML = "Consejo rápido general: Duerme entre 7 y 8 horas diarias, mantente hidratado y realiza actividad física moderada.";
    }
}
