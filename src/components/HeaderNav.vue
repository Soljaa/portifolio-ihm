<template>
  <header>
    <nav class="header-nav">
      <div style="align-items: center; display: flex;"><img width="50px" src="@/assets/images/soac-logo.png"><strong><a :href="'#' + indexPath ">Sistema de Organização de Atividades Complementares</a></strong></div>
      <div class="nav-items-container">
        <div class="nav-item-wrapper" >
          <a :href="'#' + firstPath">Análise da Situação Atual</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + secondPath">Síntese e prototipação</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + thirdPath">Avaliação</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + roadmap">Roadmap</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

  export default{
      name: 'HeaderNav',
      props: ['indexPath', 'firstPath', 'secondPath', 'thirdPath', 'roadmap']
  }

</script>
