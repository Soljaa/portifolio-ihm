<template>
<header>
      <nav class="header-nav">
        <div><strong><a href="https://soljaa.github.io/portifolio-ihm/">Projeto Design</a></strong></div>
        <div class="nav-items-container">

            <div class="nav-item-wrapper" >
              <a href="https://soljaa.github.io/portifolio-ihm/analise_sit.html">Análise da Situação Atual</a>
            </div>
            <div class="nav-item-wrapper">
              <a href="https://soljaa.github.io/portifolio-ihm/sintese_protot.html">Síntese e prototipação</a>
            </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderNav'
}

</script>

<style scoped>
  header {
    background-color: #4a90e2;
    color: white;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.header-nav a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  font-weight: bold;
  transition: opacity 0.3s;
}

.header-nav .nav-items-container {
  display: flex;
  flex-direction: row;
}

.header-nav a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.header-nav .selected {
  text-decoration: underline;
  
}
</style>