  // Evento para hacer desaparecer el elemento después de 6 segundos
setTimeout(function() {
    var carga = document.querySelector('.carga');
    if (carga) {
      carga.style.display = 'none';
    }
  }, 10000);
  
  // Evento para eliminar el nodo después de 6 segundos
  setTimeout(function() {
    var carga = document.querySelector('.carga');
    if (carga) {
      carga.parentNode.removeChild(carga);
    }
  }, 10000);
  

    // Evento para hacer desaparecer el elemento después de 6 segundos
setTimeout(function() {
    var giffy = document.querySelector('.giffy');
    if (giffy) {
      giffy.style.display = 'none';
    }
  }, 10000);
  
  // Evento para eliminar el nodo después de 6 segundos
  setTimeout(function() {
    var giffy = document.querySelector('.giffy');
    if (giffy) {
      giffy.parentNode.removeChild(giffy);
    }
  }, 10000);
  