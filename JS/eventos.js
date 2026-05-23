const botonesFiltro = document.querySelectorAll('.btn-filtro');
const todosLosEventos = document.querySelectorAll('.ticket');
const eventoEspecial = document.querySelector('.evento-especial')

const mapaCategorias = {
    'musica-vivo-btn': 'musica-vivo',
    'noches-baile-btn': 'noches-baile',
    'clases-baile-btn': 'clases-baile',
    'eventos-especiales-btn': 'eventos-especiales' 
};

function reordenarElementos() {
    const ticketsVisibles = Array.from(todosLosEventos).filter(ticket => !ticket.classList.contains('oculto'));
    
    const puntoDeInsercion = 4;
    
    let ordenActual = 1;
    
    ticketsVisibles.forEach((ticket, index) => {
        if (index === puntoDeInsercion) {
            eventoEspecial.style.order = ordenActual;
            ordenActual++;
        }
        
        ticket.style.order = ordenActual;
        ordenActual++;
    });

    if (ticketsVisibles.length <= puntoDeInsercion) {
        eventoEspecial.style.order = ordenActual;
    }
}

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', function() {
        
        const yaEstaActivo = this.classList.contains('activo');
        botonesFiltro.forEach(b => b.classList.remove('activo'));
        
        if (!yaEstaActivo) {
            this.classList.add('activo');
        }

        const botonActivo = document.querySelector('.btn-filtro.activo');

        if (botonActivo) {
            const idCategoriaMostrar = mapaCategorias[botonActivo.id];

            todosLosEventos.forEach(evento => {
                if (evento.dataset.categoria === idCategoriaMostrar) {
                    evento.classList.remove('oculto');
                } else {
                    evento.classList.add('oculto');
                }
            });
        } else {
            todosLosEventos.forEach(evento => {
                evento.classList.remove('oculto');
            });
        }

        reordenarElementos();
    });
});

reordenarElementos();