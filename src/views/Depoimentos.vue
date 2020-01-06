<template>
  <div id="depoimentos">
      <h1>Depoimentos</h1>
      <div class="container-depoimentos">
          <div class="comentario">
              <p>Adoro as recomendações da Guria Titânio, vou querer saber mais sobre os produtos! Muito legal a pagina.</p>
          </div>
          <div class="autor">
              <p>Sabrina Pereira</p>
          </div>
            <hr>
          <div class="comentario">
              <p>As indicações da GM- Guria Titânio sempre são maravilhosas! Adorei conhecer a página ;)</p>
          </div>
          <div class="autor">
              <p>Ana Mendes</p>
          </div>
            <hr>
          <div class="comentario">
              <p>Profissional confiável.</p>
          </div>
          <div class="autor">
              <p>Vinicius Borges</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #depoimentos {
        margin-top: 130px;
        width: 100%;
        text-align: center;
    }

    #depoimentos h1 {
        padding-top: 40px;
        color: #35ae9c;
    }

    .container-depoimentos {
        max-width: 1100px;
        margin: 40px auto;
    }

    .container-depoimentos .comentario {
        margin-top: 40px;
    }

    .autor p {
        font-style: italic;
        color: #353535;
    }
</style>