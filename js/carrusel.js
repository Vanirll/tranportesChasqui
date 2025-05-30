// js/carrusel.js
// Carrusel reutilizable para cualquier contenedor y datos
function crearCarrusel({ containerId, data, aspectRatio = "16/7", interval = 3500 }) {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(data) || data.length === 0) return;

    // Limpiar el contenedor
    container.innerHTML = '';
    container.classList.add('carousel-container');
    container.style.aspectRatio = aspectRatio;
    container.style.maxWidth = '1100px';
    container.style.width = '95vw';
    container.style.margin = '40px auto';
    container.style.borderRadius = '18px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
    container.style.background = '#fff';
    container.style.position = 'relative';

    let slides = [], captions = [], currentIndex = 0, intervalId;

    // Crear slides y captions
    data.forEach((destino, i) => {
        const img = document.createElement('img');
        img.src = destino.imagen;
        img.alt = destino.nombre;
        img.className = 'carousel-slide' + (i === 0 ? ' active' : '');
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.opacity = i === 0 ? '1' : '0';
        img.style.transition = 'opacity 1s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)';
        img.style.zIndex = i === 0 ? '2' : '1';
        img.style.transform = i === 0 ? 'scale(1)' : 'scale(1.01)';
        container.appendChild(img);
        slides.push(img);

        const caption = document.createElement('div');
        caption.className = 'carousel-caption';
        caption.innerHTML = `<strong>${destino.nombre}</strong><br><span>${destino.descripcion}</span>`;
        caption.style.position = 'absolute';
        caption.style.left = '0';
        caption.style.right = '0';
        caption.style.bottom = '0';
        caption.style.background = 'linear-gradient(0deg, rgba(0,0,0,0.55) 90%, rgba(0,0,0,0.10) 100%)';
        caption.style.color = '#fff';
        caption.style.padding = '22px 40px 18px 40px';
        caption.style.fontSize = '1.25rem';
        caption.style.textAlign = 'left';
        caption.style.zIndex = '3';
        caption.style.textShadow = '0 2px 8px rgba(0,0,0,0.25)';
        caption.style.maxHeight = '120px';
        caption.style.overflowY = 'auto';
        caption.style.display = i === 0 ? 'block' : 'none';
        container.appendChild(caption);
        captions.push(caption);
    });

    // Crear dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    dotsContainer.style.textAlign = 'center';
    dotsContainer.style.margin = '18px 0 10px 0';
    dotsContainer.style.position = 'relative';
    dotsContainer.style.zIndex = '4';
    container.appendChild(dotsContainer);

    data.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.style.display = 'inline-block';
        dot.style.width = '16px';
        dot.style.height = '16px';
        dot.style.margin = '0 6px';
        dot.style.background = '#bbb';
        dot.style.borderRadius = '50%';
        dot.style.cursor = 'pointer';
        dot.style.transition = 'background 0.3s';
        dot.addEventListener('click', () => showSlide(i, true));
        dotsContainer.appendChild(dot);
    });

    function showSlide(index, manual = false) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.zIndex = i === index ? '2' : '1';
            slide.style.transform = i === index ? 'scale(1)' : 'scale(1.01)';
            captions[i].style.display = i === index ? 'block' : 'none';
            dotsContainer.children[i].classList.toggle('active', i === index);
            dotsContainer.children[i].style.background = i === index ? '#333' : '#bbb';
        });
        currentIndex = index;
        if (manual) {
            clearInterval(intervalId);
            autoSlide();
        }
    }

    function autoSlide() {
        intervalId = setInterval(() => {
            let idx = (currentIndex + 1) % slides.length;
            showSlide(idx);
        }, interval);
    }

    showSlide(0);
    autoSlide();
}
