<script setup>
  const ToggleNavBar = async () => {
    const Nav = document.querySelector('#mobile nav');
    const MenuToggle = document.querySelector('.menuToggle');
    const background = document.querySelector('.opacityBackground');
    Nav.classList.toggle('open');
    background.classList.toggle('open');
    MenuToggle.classList.toggle('open');
  }
</script>

<template>
  <header id="mobile">
    <div class="menuToggle" @click="ToggleNavBar()"/>
    <div class="opacityBackground" @click="ToggleNavBar()" />
    <nav>
      <img src="../../../public/logo-denver.svg">
      <ul>
        <a>
          <li>MODELO DENVER</li><span />
        </a>
        <a>
          <li>EFICÁCIO DO MODELO</li><span />
        </a>
        <a>
          <li>SOBRE O PROJETO</li><span />
        </a>
        <a>
          <li>QUEM SOMOS</li><span />
        </a>
        <a>
          <li>ENTRAR</li><span />
        </a>
        <a>
          <li>REGISTRAR</li><span />
        </a>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  @import url('../../css/Navbar/NavMobile.module.css');
</style>