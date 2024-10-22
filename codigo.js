document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de submit
    const form = event.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            alert("Formulario enviado correctamente.");
            form.reset(); // Limpia el formulario si el envío es exitoso
        } else {
            alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
        }
    }).catch(error => {
        console.error("Error al enviar el formulario:", error);
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    });
});
