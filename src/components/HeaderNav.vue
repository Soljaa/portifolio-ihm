<template>
<header>
      <nav class="header-nav">
        <div><strong><a :href="'#' + indexPath ">Projeto Design</a></strong></div>
        <div class="nav-items-container">

            <div class="nav-item-wrapper" >
              <a :href="'#' + firstPath">Análise da Situação Atual</a>
            </div>
            <div class="nav-item-wrapper">
              <a :href="'#' + secondPath">Síntese e prototipação</a>
            </div>
        </div>
      </nav>
    </header>
</template>

<script>

  export default{
      name: 'HeaderNav',
      props: ['indexPath', 'firstPath', 'secondPath']
  }

</script>
