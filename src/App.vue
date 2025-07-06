<template>
  <HeaderNav></HeaderNav>
  <main style="margin: auto;">
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
  </main>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import SectionComponent from './components/SectionComponent.vue';

export default {
  name: 'App',
  components: {
    SectionComponent,
    HeaderNav
  }
}
</script>

<style scoped>
:root {
  --color-primary: #4a90e2;
  --color-secondary: #50e3c2;
  --color-accent: #f5a623;
  --bg-light: #f9f9f9;
  --bg-white: #ffffff;
  --text-dark: #333;
  --text-light: #666;
  --font-base: "Noto Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-base);
  line-height: 1.6;
  background-color: var(--bg-light);
  color: var(--text-dark);

  overflow-x: hidden;
}
main {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}
</style>

