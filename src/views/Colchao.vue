<template>
  <div id="colchao">
    <div v-if="$route.params.id">
      <Produto
        v-if="colchao"
        :titulo="colchao.titulo"
        :descricao="colchao.descricao"
        :imagens="colchao.imagens"
        :beneficios="colchao.beneficios"
        :especificacoes="colchao.especificacoes"
        :medidas="colchao.medidas"
        :camadas="colchao.camadas"
        :observacoes="colchao.observacoes"
      />
    </div>
  </div>
</template>

<script>
import produtos from "@/assets/dados/produtos.json";
import Produto from "@/components/Produto.vue";

export default {
  components: { Produto },
  data() {
    return {
      colchao: ""
    };
  },
  methods: {
    carregaProduto() {
      if (this.$route.params.id) {
        this.colchao = produtos.colchoes.filter(
          a => a.id == this.$route.params.id
        )[0];
      }
    }
  },
  created() {
    this.carregaProduto();
  }
};
</script>

<style>
#colchao {
    margin-top: 130px;
}
</style>