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

      <!-- Itens do menu -->
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

.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 2px;
}

/* Responsividade */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .header-nav .nav-items-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: var(--bg-white);
    border: 1px solid #ddd;
    padding: 10px;
    z-index: 10;
  }
  .header-nav .nav-items-container.open {
    display: flex;
  }
  .header-nav .nav-items-container a {
    color: var(--color-primary);
    margin: 10px 0;
  }
}
</style>