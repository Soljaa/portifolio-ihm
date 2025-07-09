<template>
  <HeaderNav :index-path="'/'" :first-path="'/analise-sit'" :second-path="'/sint-prot'"></HeaderNav>

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

import { ref, useTemplateRef, computed } from 'vue'

export default {
  name: 'App',
  setup(){
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

    const routes = {
      '/' : index_sections,
      '/analise-sit': analise_sit_sections,
      '/sint-prot': sintese_protot_sections,
    }


    let sectionsRef = useTemplateRef('sections')   

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
      currentPath.value = window.location.hash
      console.log('triggered')
    })

    const current_sections = computed(() => {
      console.log(currentPath)
      console.log(routes[currentPath.value.slice(1) || '/'] || routes['/'])
      return routes[currentPath.value.slice(1) || '/'] || routes['/']
    })

    return { sectionsRef, current_sections}
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