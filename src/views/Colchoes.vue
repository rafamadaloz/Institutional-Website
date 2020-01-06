<template>
  <div id="colchoes">
    <div
      class="titulo"
      :style="{'background-image': 'url(' + require(`../assets/dados/imagens/background_colchoes.jpg`) + ')'}"
    >
      <div class="background-preto">
        <h1>Colchões</h1>
        <p>Surpreenda-se com a qualidade de nossos produtos.</p>
      </div>
    </div>
    <div class="container-colchoes">
      <v-row>
        <v-col cols="12" md="3" sm="6" v-for="colchao in colchoes" :key="colchao.id">
          <div class="card-colchao">
            <router-link :to="`colchoes/${colchao.id}`" class="link">
              <div class="imagem">
                <div
                  class="background"
                  :style="{'background-image': 'url(' + require(`../assets/dados/imagens/${colchao.imagens[0]}`) + ')'}"
                ></div>
              </div>
              <button>{{ colchao.titulo}}</button>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import produtos from "@/assets/dados/produtos.json";

export default {
  data() {
    return {
      colchoes: produtos.colchoes
    };
  },
};
</script>

<style>
#colchoes {
  margin-top: 130px;
}

#colchoes .background-preto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#colchoes .titulo {
  height: 300px;
  text-align: center;
  background-position: center center;
}

#colchoes .titulo p {
  color: white;
}

#colchoes .titulo h1 {
  font-size: 54px;
  margin-bottom: 10px;
  color: white;
  font-weight: 900;
}

.container-colchoes {
  max-width: 1100px;
  margin: 0 auto;
}

.card-colchao {
  width: 100%;
  height: 300px;
}

.card-colchao img {
  transition: 0.3s;
  min-width: 100%;
  min-height: 100%;
}

.card-colchao .imagem {
  overflow: hidden;
  border: #35ae9c 1px solid;
  height: 250px;
}

.card-colchao .imagem .background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: 0.3s;
}

.card-colchao .imagem:hover .background {
  transform: scale(1.2);
  transition: 0.3s;
}

.container-colchoes {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 20px;
}

#colchoes .link {
  width: 100%;
  cursor: pointer;
}

#colchoes .link button {
  border: 4px solid #35ae9c;
  color: #35ae9c;
  width: 100% !important;
  padding: 10px;
  transition: 0.4s;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#colchoes .link button:hover {
  background: #35ae9c;
  color: white;
  transition: 0.4s;
}
 
</style>