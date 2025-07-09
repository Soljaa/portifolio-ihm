<template>
    <div class="carousel-container" ref="currentCarrousel">
        <div class="carousel-slides">
            <slot></slot>
        </div>
        <button class="carousel-arrow carousel-arrow-left" @click="previous">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-arrow carousel-arrow-right" @click="next">
              <i class="fas fa-chevron-right"></i>
            </button>

            <div class="carousel-dots">
                <div class="carousel-dot" v-for="i in slideIndexArray" :key="i" ref="slidesNum" @click="currentSlideIndex = i" v-bind:class="{active: i === currentSlideIndex}"></div>
            </div>
    </div>

    
</template>

<script>
import { onMounted, onUpdated, ref, useTemplateRef } from 'vue';

export default {
    name: 'CarouselContainer',
    setup(){
        const currentCarrousel = useTemplateRef('currentCarrousel')
        const currentSlideIndex = ref(0);


        let slidesContainer = null
        let slides = null
        
        const totalSlides = ref(0)
        const slideIndexArray = ref([])
        
        let dotsRef = useTemplateRef('slidesNum')

        onMounted(() => {
            slides = currentCarrousel.value.querySelectorAll('.carousel-slide');
            slidesContainer = currentCarrousel.value.querySelector('.carousel-slides');
            //console.log(slides)
            totalSlides.value = slides.length;
            slideIndexArray.value = Array.from({length: totalSlides.value}, (v, i) => i);
            console.log(slideIndexArray)
            // Função para atualizar a exibição do carrossel específico
            // Aplica a transformação para mover os slides 
            currentCarrousel.value.style.transform = `translateX(-${currentSlideIndex.value * 100}%)`;

        })

        onUpdated(() => {
            if (currentCarrousel.value != null){
                console.log(slides)
                slidesContainer.style.transform = `translateX(-${currentSlideIndex.value * 100}%)`
        }
        })

        

        // Event listeners para as setas deste carrossel específico
        let next = () => {
            console.log('clicked')
            currentSlideIndex.value++;
            if (currentSlideIndex.value >= totalSlides.value) {
                currentSlideIndex.value = 0; // Volta para o primeiro slide (loop)
            }
            console.log(currentSlideIndex.value)
        };

        let previous = () => {
            currentSlideIndex.value--;
            if (currentSlideIndex.value < 0) {
                currentSlideIndex.value = totalSlides.value - 1; // Vai para o último slide (loop)
            }
        };
        return { next, previous, currentSlideIndex, totalSlides, slideIndexArray, dotsRef}
    }
}
</script>