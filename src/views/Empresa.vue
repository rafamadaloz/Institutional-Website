<template>
  <div id="empresa">
    <div class="titulo">
      <div class="background-preto">
        <h1>Sobre a Foliari</h1>
        <p>
          No ano de 2013 adquirimos um colchão - Eko7 da Distribuição Bergonci - Com. de Colchões,
          o Bergonci é o cunhado do Silvano e meu concunhado. Nesta época eu
          tinha muita dores das costas, pois estudava e ficava muito tempo na
          frente do notebook, digitando. Era tanta dor que muitas vezes não conseguia
          subir as escadas da minha casa para ir ao quarto!
        </p>
      </div>
    </div>
    <div class="historia">
      <p class="paragrafo1">
        Após algum tempo de uso do colchão, minhas dores foram diminuindo cada vez mais. Este fato me deixou muito feliz - quem gosta de sentir dores, não é mesmo?? Foi assim que acabamos nos apaixonando pela Eko7, mas anterior a isto, já havíamos adquirido vários produtos: sandálias, imantador de líquidos, protetor para seio, palmilhas...a Eko7 foi nos conquistando aos poucos.
      </p>
      <p class="paragrafo2">
        Bem, passado alguns meses, fomos convidados a ser Representantes Eko7, e o Bergonci era nosso Distribuidor, assim ele nos ajudou a iniciarmos o negócio, nos treinando e orientando para atendermos cada vez melhor nossos queridos clientes. No começo fomos bem devagar, já que tanto eu quanto o Silvano trabalhávamos em outras empresas. 
      </p>
      <div class="imagem imagem1">
          <img src="@/assets/historia/eko7.jpg" alt="">
          <p><i>EKO7</i></p>
      </div>
      <p class="paragrafo3">
          Em dezembro/2016 chegamos à pontuação exigida para que pudéssemos ter a nossa própria Distribuição...e agora?? Somos donos de uma empresa?!?! A partir desse momento iniciamos a parte burocrática, nos organizamos e então recebemos nosso certificado de empresários! Agora éramos distribuidores Eko7!!!
      </p>
      <p class="paragrafo4">
          Em janeiro de 2017 o Silvano saiu da outra empresa e no final  deste mesmo ano foi a minha vez de dar adeus ao antigo trabalho. Tudo valeu à pena e hoje estamos muito felizes por fazer parte desta grande família que é a EKO7. Nela encontramos apoio, tanto do Diretor-Presidente, um homem à frente de seu tempo, um sonhador-realizador, que não mede esforços para que todos que estão ligados a ele, sejam muito felizes e realizados em seus negócios, quanto os nossos colegas Distribuidores, que se apoiam mutuamente para que possamos seguir atendendo sempre com muita alegria, podendo levar nossos bons sentimentos e nossos excelentes produtos  a todas as pessoas que gostam e precisam dormir bem e melhorar sua saúde.
      </p>
      <div class="imagem imagem2">
          <img src="@/assets/historia/familia-bergonci.jpg" alt="">
          <p><i>A família Bergonci e nós!</i></p>
      </div>
      <div class="imagem imagem3">
          <img src="@/assets/historia/treinamento_eko7.jpg" alt="">
          <p><i>Treinamento EKO7</i></p>
      </div>
      <p class="paragrafo5">
          Então, sintam-se a vontade de olhar nossa página, nossos produtos (Loja Virtual) e entrar em contato conosco a hora que quiserem!
      </p>
      <p class="paragrafo6">
          Grande abraço!
      </p>
      <div class="imagem imagem4">
          <img src="@/assets/historia/claudia_silvano.jpg" alt="">
          <p><i>Claudia Foletto e Silvano Ogliari</i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#empresa {
  margin-top: 130px;
  width: 100%;
}

#empresa h1 {
  padding-top: 50px;
  font-size: 54px;
  color: white;
  font-weight: 900;
  text-align: center;
}

#empresa .titulo p {
  color: white;
  max-width: 710px;
  text-align: center;
  margin: 0 auto;
  padding: 50px;
}

#empresa .titulo {
  background-image: url("../assets/dados/imagens/background_colchoes.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
}

.background-preto {
  background: rgba(0, 0, 0, 0.493);
  height: 100%;
}

.historia {
    max-width: 900px;
    margin: 50px auto;
    display: grid;
    grid-template-areas: 
    "paragrafo1 imagem1"
    "paragrafo2 imagem1"
    "imagem2 paragrafo3"
    "imagem2 paragrafo4"
    "imagem3 imagem4"
    "paragrafo5 imagem4"
    "paragrafo6 paragrafo6";
}

.historia .imagem img {
    max-width: 400px;
}

.historia .imagem p {
  color: #3333339f;
  text-align: center;
}

.historia p {
    color: #333333;
    max-width: 400px;
}

.paragrafo1 {
    grid-area: paragrafo1;
}

.paragrafo2 {
    grid-area: paragrafo2;
}

.paragrafo3 {
    grid-area: paragrafo3;
}

.paragrafo4 {
    grid-area: paragrafo4;
}

.paragrafo5 {
    grid-area: paragrafo5;
}

.paragrafo6 {
    grid-area: paragrafo6;
}

.imagem1 {
    grid-area: imagem1;
}

.imagem2 {
    grid-area: imagem2;
}

.imagem3{
    grid-area: imagem3;
}

.imagem4 {
    grid-area: imagem4;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .historia {
      margin: 20px;
      grid-template-areas: 
      "paragrafo1"
      "imagem1"
      "paragrafo2"
      "imagem2"
      "paragrafo3"
      "paragrafo4"
      "imagem3"
      "paragrafo5"
      "imagem4"
      "paragrafo6";
  }
  .historia .imagem img {
    max-width: 100%;
}
} 

</style>