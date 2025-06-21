document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona TODOS os contêineres de carrossel na página
    const allCarousels = document.querySelectorAll('.carousel-container');

    // 2. Itera sobre cada contêiner de carrossel encontrado
    allCarousels.forEach(carouselContainer => {
        // 3. Para cada contêiner, chama a função de inicialização
        initCarousel(carouselContainer);
    });

    // Função que encapsula TODA a lógica de um ÚNICO carrossel
    function initCarousel(carouselContainer) {
        // Seleciona os elementos AGORA DENTRO do contêiner específico
        const carouselSlides = carouselContainer.querySelector('.carousel-slides');
        const slides = carouselContainer.querySelectorAll('.carousel-slide');
        const prevArrow = carouselContainer.querySelector('.carousel-arrow-left');
        const nextArrow = carouselContainer.querySelector('.carousel-arrow-right');
        const dotsContainer = carouselContainer.querySelector('.carousel-dots');

        let currentSlideIndex = 0;
        const totalSlides = slides.length;

        // Função para atualizar a exibição do carrossel específico
        function updateCarousel() {
            // Aplica a transformação para mover os slides
            carouselSlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

            // Atualiza o estado "ativo" dos dots para ESTE carrossel
            // Primeiro remove 'active' de todos, depois adiciona ao atual
            dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                if (index === currentSlideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Cria os dots de navegação dinamicamente para ESTE carrossel
        function createDots() {
            // Limpa dots existentes para evitar duplicação em re-renderizações (se houvesse)
            dotsContainer.innerHTML = ''; 
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                dot.addEventListener('click', () => {
                    currentSlideIndex = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            }
        }

        // Event listeners para as setas deste carrossel específico
        nextArrow.addEventListener('click', () => {
            currentSlideIndex++;
            if (currentSlideIndex >= totalSlides) {
                currentSlideIndex = 0; // Volta para o primeiro slide (loop)
            }
            updateCarousel();
        });

        prevArrow.addEventListener('click', () => {
            currentSlideIndex--;
            if (currentSlideIndex < 0) {
                currentSlideIndex = totalSlides - 1; // Vai para o último slide (loop)
            }
            updateCarousel();
        });

        // Inicializa ESTE carrossel ao carregar a página
        createDots(); // Cria os dots antes de tudo
        updateCarousel(); // Garante que o primeiro slide esteja visível e dot ativo
    }
});