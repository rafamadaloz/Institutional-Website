<template>
  <div id="produto">
    <div class="titulo">
      <h1>{{titulo}}</h1>
    </div>

    <div class="imagens-e-botoes">
      <v-row>
        <v-col cols="12" md="6">
          <div class="imagens">
            <v-carousel height="400">
              <v-carousel-item
                v-for="(imagem,i) in imagens"
                :key="i"
                :src="require(`@/assets/dados/imagens/${imagem}`)"
              ></v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="detalhes">
            <div class="solicitar-orcamento">
              <button
                v-scroll-to="{
            el: '#orcamento',
            offset: -200,
          }"
                id="btn-solicitar-orcamento"
              >Socilitar orçamento agora!</button>
            </div>

            <div class="descricao">
              <p>{{ descricao }}</p>
            </div>

            <div class="btn-especificacoes">
              <button
                @click="mostrarEspecificacoes()"
                v-scroll-to="{
            el:'#especificacoes',
            offset: -200
          }"
                id="btn-especificacoes"
              >Ver especificações</button>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-show="showEspecificacoes" class="especificacoes" id="especificacoes">
      <v-row>
        <v-col cols="12" md="4" v-if="beneficios">
          <div class="beneficios">
            <h3>Benefícios</h3>
            <ul>
              <li v-for="(beneficio) in beneficios" :key="beneficio">{{ beneficio }}</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4" v-if="especificacoes">
          <div class="mais-especificacoes">
            <h3>Especificações</h3>
            <ul>
              <li v-for="(especificacao) in especificacoes" :key="especificacao">{{ especificacao }}</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4" v-if="medidas">
          <div class="medidas">
            <h3>Medidas</h3>
            <ul>
              <li v-for="(medida) in medidas" :key="medida">{{ medida }}</li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="camadas" v-if="camadas">
            <h3>Camadas</h3>
            <ul>
              <li v-for="(camada) in camadas" :key="camada">{{ camada }}</li>
            </ul>
          </div>

          <div class="observacoes mt-3" v-if="observacoes">
            <h3>Observações</h3>
            <ul>
              <li v-for="(obs) in observacoes" :key="obs">{{ obs }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
    <Orcamento />
  </div>
</template>

<script>
import Orcamento from "@/components/Orcamento";

export default {
  components: { Orcamento },
  props: [
    "titulo",
    "descricao",
    "imagens",
    "beneficios",
    "especificacoes",
    "observacoes",
    "medidas",
    "camadas"
  ],
  data() {
    return {
      showEspecificacoes: false
    };
  },
  methods: {
    mostrarEspecificacoes() {
      this.showEspecificacoes = !this.showEspecificacoes;
    }
  }
};
</script>

<style>
#produto {
  max-width: 1100px;
  margin: 40px auto;
}

#produto .titulo {
  text-align: center;
  margin-bottom: 20px;
  grid-area: titulo;
}

#produto .titulo h1 {
  color: #35ae9c;
  padding-top: 30px;
}

#produto .imagens {
  grid-area: imagens;
  margin: 20px;
}

#produto .detalhes {
  grid-area: detalhes;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;
}

#produto .descricao p {
  color: rgb(112, 112, 112);
}

#btn-solicitar-orcamento {
  background: #35ae9c;
  padding: 20px;
  width: 100%;
  font-size: 18px;
  color: white;
  font-weight: 600;
  transition: 0.3s;
  outline: none;
}

#btn-solicitar-orcamento:hover {
  box-shadow: inset 0 0 1em white;
}

#btn-especificacoes {
  border: 4px solid #35ae9c;
  padding: 20px;
  width: 100%;
  font-size: 18px;
  color: #35ae9c;
  font-weight: 600;
  transition: 0.3s;
  outline: none;
}

#btn-especificacoes:hover {
  box-shadow: inset 0 0 1em #35ae9c;
}

#produto .especificacoes {
  margin: 20px;
  max-width: 1100px;
}

#produto .especificacoes h3 {
  margin-bottom: 10px;
}

#produto .especificacoes ul {
  color: rgb(100, 100, 100);
  font-size: 14px;
}
</style>