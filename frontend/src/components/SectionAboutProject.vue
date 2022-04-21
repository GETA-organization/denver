<script setup>

</script>

<template>
  <section>
    <div class="container">    
      <div>
        <img src="../assets/toy-library.png" alt="Brinquedoteca">
      </div>
      <div>
        <h2>SOBRE O PROJETO</h2>
        <p>
          O projeto tem como alvo pais ou responsáveis de crianças do Transtorno do Espectro Autista (TEA) que possuem difícil acesso à terapia no Modelo Denver de Intervenção Precoce, por morarem em países poucos desenvolvidos, ensinando-os como realizar terapia em seus próprios filhos a partir de um ambiente gamificado e intuitivo, que possui vídeos, jogos e um sistema progressão a cada aula.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import url('../css/SectionEffectiveness.module.css');
  /* Preguiça de criar outro arquivo */ 
  .container {
    margin: 0 0 3.25rem 0;
  }

  @media(max-width: 1024px) {
    .container {
      flex-direction: column-reverse;
    }
  }
</style>