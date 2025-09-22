document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        let modal = new bootstrap.Modal(document.getElementById("videoModal"));
        modal.show();
    
        // Reproducir el video automáticamente al abrir el modal
        let video = document.getElementById("promoVideo");
        if (video) {
          video.play();
        }
    
        // Pausar el video y reiniciarlo al cerrar el modal
        document.getElementById("videoModal").addEventListener("hidden.bs.modal", function () {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }, 5000); // Abre el modal después de 5 segundos
    });
    