// Obtener los elementos del formulario
const form = document.querySelector('.contacto__form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const asuntoInput = document.getElementById('asunto');
const mensajeInput = document.getElementById('mensaje');

// Agregar un evento de escucha al enviar el formulario
form.addEventListener('submit', function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Realizar las validaciones
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const asunto = asuntoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Validar que el nombre no esté vacío y tenga menos de 50 caracteres
  if (nombre === '' || nombre.length > 50) {
    alert('Por favor, ingrese un nombre válido.');
    return;
  }

  // Validar que el email no esté vacío y sea válido
  if (email === '' || !validateEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Validar que el asunto no esté vacío y tenga menos de 50 caracteres
  if (asunto === '' || asunto.length > 50) {
    alert('Por favor, ingrese un asunto válido.');
    return;
  }

  // Validar que el mensaje no esté vacío y no supere los 300 caracteres
  if (mensaje === '' || mensaje.length > 300) {
    alert('Por favor, ingrese un mensaje válido de hasta 300 caracteres.');
    return;
  }

  // Si todas las validaciones pasan, enviar el formulario
  form.submit();
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
