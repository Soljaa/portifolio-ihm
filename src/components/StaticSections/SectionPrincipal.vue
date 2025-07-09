<template>
    <SectionComponent itemid="principal" title="Sobre o Projeto" icon="fa-question-circle">
      <p>
            O objetivo deste projeto é criar uma plataforma central onde alunos podem organizar suas atividades completas, obter detalhes sobre o projeto,
             verificar o número de horas complementares completas, quantas horas faltam para alcançar o mínimo de seu currículo e descobrir novos eventos.
          </p>

          <p>
            Esse projeto foi desenvolvido como parte da disciplina <strong>Interface Homem Máquina</strong> no semestre 2025.1,
             ministrado pela professora Daniela Trevisan.
          </p>

          <strong>Integrantes: </strong>
          <ul style="margin-left: 5%;">
            <li>Daniel Jose</li>
            <li>Rodrigo Lugão</li>
            <li>Grabriel Tavares</li>
            <li>Cael Gonçalves</li>
          </ul>
    </SectionComponent>
</template>

<script>
import SectionComponent from '../SectionComponent.vue';

export default{
    name: 'SectionPrincipal',
    components: {
        SectionComponent
    }
}
</script>