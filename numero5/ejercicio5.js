
function validarCorreo(){
  const input = document.getElementById('correo');
  const email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.com)$/i;

  if (!input.value.trim()) {
    alert('El campo del correo está vacío. Por favor, rellénelo.');
    return false;
  } else if (email.test(input.value)) {
    alert('Email Válido');
    return true;
  } else {
    alert('Email inválido. Por favor, vuelva a intentar.');
    return false;
  }
}

