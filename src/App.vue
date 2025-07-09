<template>
  <HeaderNav @go-to-index="changeToIndex" @go-to-entrega-um="changeToEntrega1" @go-to-entrega-dois="changeToEntrega2"></HeaderNav>

  <main style="margin: auto;" v-for="sec in current_sections" ref="sections" :key="sec">
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

import { ref, useTemplateRef, onMounted } from 'vue'

export default {
  name: 'App',
  setup(){



    const changeToEntrega1 = () => {
      current_sections.value = analise_sit_sections

    }

    const changeToEntrega2 = () => {
      current_sections.value = sintese_protot_sections
      console.log(current_sections.value)
    }

    const changeToIndex = () => {
      current_sections.value = index_sections
      console.log(current_sections.value)
    }


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

    let current_sections = ref(index_sections)

    let sectionsRef = useTemplateRef('sections')    

    return { current_sections, sectionsRef, changeToEntrega1, changeToEntrega2, changeToIndex }
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