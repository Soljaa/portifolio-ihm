<template>
    <SectionComponent itemid="analise"
                      title="Análise Competitiva / Comparativa / Inspiradora" 
                      icon="fa-chart-line">
      

        <ZoomableImage alt="análise comparativa" :src="comparativaImg" />

    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';
import ZoomableImage from "../ZoomableImage.vue";
import comparativaImg from "@/assets/images/comparativa.jpg";

export default{
    name: 'SectionAnalise',
    components: {
        SectionComponent,
        ZoomableImage
    },
    data() {
    return { comparativaImg };
  }
}
</script>