<template>
  <header>
    <nav class="header-nav">
      <div class="logo-title">
        <img width="50px" src="@/assets/images/soac-logo.png" />
        <strong>
          <a :href="'#' + indexPath">SOAC</a>
        </strong>
      </div>

      <button class="hamburger" @click="toggleMenu">
        <i class="fas fa-bars" style="color: white; font-size: 20px;"></i>
      </button>

      <div class="nav-items-container" :class="{ open: menuOpen }">
        <div class="nav-item-wrapper">
          <a :href="'#' + firstPath" @click="closeMenu">Imersão</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + secondPath" @click="closeMenu">Ideação</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + thirdPath" @click="closeMenu">Avaliação</a>
        </div>
        <div class="nav-item-wrapper">
          <a :href="'#' + forthPath" @click="closeMenu">Roadmap</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: ['indexPath', 'firstPath', 'secondPath', 'thirdPath', 'forthPath'],
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style>
.header-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}

.header-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s;
}

.header-nav a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.header-nav .selected {
  text-decoration: underline;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* ✅ Ajuste importante */
.header-nav .nav-items-container {
  display: flex; /* mostra em linha por padrão */
  flex-direction: row;
  gap: 15px;
}

/* Responsividade */
@media (max-width: 768px) {
  .hamburger {
    display: block; /* mostra botão hamburguer em telas pequenas */
  }

  .header-nav {
    justify-content: space-between;
  }

  .header-nav .nav-items-container {
    display: none; /* esconde menu por padrão em telas pequenas */
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background: var(--bg-white);
    border: 1px solid #ddd;
    padding: 10px;
    z-index: 10;
  }

  .header-nav .nav-items-container.open {
    display: flex; /* mostra menu se aberto */
  }

  .header-nav .nav-items-container a {
    color: var(--color-primary);
    margin: 10px 0;
  }
}
</style>
