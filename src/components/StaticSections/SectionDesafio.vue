<template>
    <SectionComponent itemid="desafio"
                      title="Definição da Design Challenge: HMW" 
                      icon="fa-question-circle">
      

          <p>
            <strong>Pergunta:</strong><br />
            Como nós podemos ajudar alunos da graduação do IC a acompanhar o seu
            progresso de horas complementares de forma eficiente e organizada?
          </p>
          <ul>
            <li>
              <strong>A pergunta é focada no impacto principal?</strong><br />
              Sim. Ela está centrada em resolver um problema real e específico:
              a dificuldade dos alunos em acompanhar o progresso de horas
              complementares, com foco em eficiência e organização.
            </li>
            <li>
              <strong>A pergunta permite uma variedade de soluções?</strong
              ><br />
              Sim. É aberta o suficiente para permitir diversas abordagens como
              apps, planilhas, integrações com sistemas institucionais,
              gamificação, entre outras.
            </li>
            <li>
              <strong>A pergunta leva em conta contexto e limitações?</strong
              ><br />
              Parcialmente. Menciona o público (alunos da UFF), mas não
              explicita limitações como variabilidade das regras,
              desconhecimento das normas, ou restrições tecnológicas.
            </li>
          </ul>
    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';

export default{
    name: 'SectionDesafio',
    components: {
        SectionComponent
    }
}
</script>