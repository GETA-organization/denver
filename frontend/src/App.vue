<script setup>
import NavBar from './components/NavBar.vue';
import SectionHero from './components/SectionHero.vue';
import SectionDenverModel from './components/SectionDenverModel.vue';
import SectionEffectiveness from './components/SectionEffectiveness.vue';
import SectionAboutProject from './components/SectionAboutProject.vue';
import SectionAboutUs from './components/SectionAboutUs.vue';

defineProps({
  data: {},
});

</script>

<template>
  <NavBar />
  <SectionHero />
  <SectionDenverModel />
  <SectionEffectiveness />
  <SectionAboutProject />
  <SectionAboutUs />
</template>

<style>
  @import url('./css/global.css');
</style>
