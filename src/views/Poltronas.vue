<template>
  <div id="poltronas">
      
      <div v-for="poltrona in poltronas" :key="poltrona.id">
            <Produto 
                :titulo="poltrona.titulo"
                :descricao="poltrona.descricao"
                :imagens="poltrona.imagens"
                :beneficios="poltrona.beneficios"
                :especificacoes="poltrona.especificacoes"
                :medidas="poltrona.medidas"
            />
      </div>
  </div>
  
</template>

<script>
import produtos from "@/assets/dados/produtos.json";
import Produto from "@/components/Produto.vue"

export default {
    components: { Produto },
  data() {
    return {
      poltronas: produtos.poltronas,
    };
  }
};
</script>

<style>
#poltronas {
  margin-top: 130px;
}
</style>