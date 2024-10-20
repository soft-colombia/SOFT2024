document.getElementById('formulario').addEventListener('submit', function(event) {
    event.prevent.Default();

    this.submit();

    this.reset();
    
});