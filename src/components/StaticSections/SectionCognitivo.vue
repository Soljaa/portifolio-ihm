<template>
  <SectionComponent
    itemid="cognitivo"
    title="Percurso Cognitivo"
    icon="fa-person-dots-from-line"
  >
    <p>
      O percurso cognitivo é um método de avaliação de usabilidade que analisa
      passo a passo como um usuário realiza tarefas específicas em uma
      interface, identificando possíveis dificuldades, dúvidas e caminhos não
      ideais. Ele serve para compreender se o sistema permite que o usuário
      atinja seus objetivos de forma intuitiva, avaliando cada ação necessária
      no processo de uso. Em nosso projeto, aplicamos o percurso cognitivo para
      todas as <a href="#/sint-prot">tarefas</a> do modelo definido, analisando
      desde a busca de informações sobre carga horária até a simulação e
      registro de atividades complementares, para verificar se cada etapa era
      clara, se os termos eram compreensíveis e se a interface guiava
      adequadamente o estudante ao seu objetivo.
    </p>
    <h3>Resultados</h3>
    <iframe
      width="100%"
      height="800px"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROCAGEyCthXuceJrk8ebv0GX30cNzwBx4GfoTrmeX9qE-K5j96ZV7dyLyFdbeGPZT1mxACMHfh-Z2i/pubhtml?widget=true&amp;headers=false"
    ></iframe>
    <h3>Conclusão</h3>
    <p>
      Ao mapear cada tarefa, conseguimos ver se as ações fazem sentido, se algo
      está confuso ou se poderia ser mais fácil. Esse tipo de análise é
      importante porque coloca o olhar do usuário no centro do desenvolvimento,
      mostrando onde podemos melhorar para que qualquer estudante consiga usar a
      plataforma com mais tranquilidade e sem ficar perdido.
    </p>
  </SectionComponent>
</template>

<script>
import SectionComponent from "../SectionComponent.vue";

export default {
  name: "SectionCognitivo",
  components: {
    SectionComponent,
  },
};
</script>
