document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de submit
    const form = event.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            form.reset(); // Limpia el formulario si el envío es exitoso
        }
    }).catch(error => {
        console.error("Error al enviar el formulario:", error);
    });
});
