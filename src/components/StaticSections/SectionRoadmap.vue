<template>
  <SectionComponent itemid="roadmap" title="Roadmap" icon="fa-person-walking">
    <p>
      O roadmap deste projeto está dividido em três etapas principais. Na fase de Imersão,
      são realizadas técnicas como How Might We, Desk Research, Análise
      Comparativa, Questionários e Entrevistas para compreender o problema, o
      contexto e as necessidades dos usuários.
    </p>
    <p>
      Em seguida, a fase de Ideação envolve a criação de Personas, definição de
      Cenários Problema, construção do Modelo de Tarefas e Prototipação,
      organizando informações e transformando ideias em soluções visuais e
      interativas.
    </p>
    <p>
      Por fim, a etapa de Avaliação valida as soluções desenvolvidas por meio de
      métodos como Avaliação Heurística, Percurso Cognitivo e First Click,
      identificando pontos de melhoria antes da entrega final.
    </p>

    <img alt="roadmap" src="@/assets/images/roadmap.png" />
  </SectionComponent>
</template>

<script>
import SectionComponent from "../SectionComponent.vue";

export default {
  name: "SectionRoadmap",
  components: {
    SectionComponent,
  },
};
</script>
