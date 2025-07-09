<template>
<header>
      <nav class="header-nav">
        <div><strong><a @click="$emit('goToIndex')">Projeto Design</a></strong></div>
        <div class="nav-items-container">

            <div class="nav-item-wrapper" >
              <a @click="$emit('goToEntregaUm')">Análise da Situação Atual</a>
            </div>
            <div class="nav-item-wrapper">
              <a @click="$emit('goToEntregaDois')">Síntese e prototipação</a>
            </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderNav',
    emits: ['goToIndex', 'goToEntregaUm', 'goToEntregaDois']
}

</script>
