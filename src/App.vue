<template>
  <HeaderNav></HeaderNav>
  <main style="margin: auto;" v-for="sec in current_sections" :key="sec">
    <component :is="sec"></component>
  </main>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import SectionAnalise from './components/StaticSections/SectionAnalise.vue';
import SectionCenarios from './components/StaticSections/SectionCenarios.vue';
import SectionCrazy4 from './components/StaticSections/SectionCrazy4.vue';
import SectionDesafio from './components/StaticSections/SectionDesafio.vue';
import SectionDeskResearch from './components/StaticSections/SectionDeskResearch.vue';
import SectionPersonas from './components/StaticSections/SectionPersonas.vue';
import SectionPrincipal from './components/StaticSections/SectionPrincipal.vue';
import SectionPrototipo from './components/StaticSections/SectionPrototipo.vue';
import SectionQualitativa from './components/StaticSections/SectionQualitativa.vue';
import SectionQuestionario from './components/StaticSections/SectionQuestionario.vue';
import SectionTarefas from './components/StaticSections/SectionTarefas.vue';

export default {
  name: 'App',
  setup(){
    // Seleciona todas as imagens das seções
    const images = document.querySelectorAll("section img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    images.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };



    const index_sections = [SectionPrincipal]

    const analise_sit_sections = [
      SectionDesafio,
      SectionDeskResearch,
      SectionAnalise,
      SectionQualitativa,
      SectionQuestionario,
    ]

    const sintese_protot_sections = [
      SectionPersonas,
      SectionCenarios,
      SectionTarefas,
      SectionCrazy4,
      SectionPrototipo
    ]

    let current_sections = index_sections

    return { current_sections }
  },
  components: {
    HeaderNav,
    SectionPrincipal
  }
}
</script>


<style>
  @import "./css/style.css";
  @import "./css/persona.css";
</style>