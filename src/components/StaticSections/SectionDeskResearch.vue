<template>
    <SectionComponent itemid="desk-research"
                      title="Desk Research (Matriz CSD)" 
                      icon="fa-search">
      

        <ZoomableImage alt="matriz csd" :src="csdImg" />

    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';
import ZoomableImage from "../ZoomableImage.vue";
import csdImg from "@/assets/images/csd.jpg";

export default{
    name: 'SectionDeskResearch',
    components: {
        SectionComponent,
        ZoomableImage
    },
    data() {
    return { csdImg };
  }
}
</script>