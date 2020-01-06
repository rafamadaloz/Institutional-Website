<template>
    <div id="produtos">
        <div class="produtos-titulo">
            <img src="@/assets/icon-esquerda-cima.png" alt="">
            <h2>Confira os nossos produtos</h2>
            <img src="@/assets/icon-direita-baixo.png" alt="">
        </div>
        <div class="produtos-cards">
            <v-row>
                <v-col cols="12" md="6" class="produto-card">
                    <router-link to="/colchoes" >
                        <div class="imagem">
                            <img src="@/assets/colchoes.jpg" alt="">
                             <div class="descricao">
                            <h4>Colchões</h4>
                        </div>
                        </div>
                       
                    </router-link>
                </v-col>
                
                <v-col cols="12" md="6"  class="produto-card">
                    <router-link to="poltronas">
                        <div class="imagem">
                            <img src="@/assets/poltronas.jpg" alt="">
                            <div class="descricao">
                                <h4>Poltronas</h4>
                            </div>
                        </div> 
                    </router-link>
                </v-col> 
            </v-row>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
    #produtos {
        margin-bottom: 40px;
    }

    .produtos-titulo {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #35ae9c;
        margin-bottom: 40px;
    }

    .produtos-titulo img {
        width: 40px;
        margin-left: 30px;
        margin-right: 30px;
    }

    .produtos-titulo h2 {
        text-transform: uppercase;
        font-weight: 400;
        color: white;
    }

    .produtos-cards {
        margin: 0 auto;
        max-width: 1100px;
    }

    .produto-card {
        width: 300px;
        border-radius: 20px;
        position: relative;
        padding: 40px;
    }

    .produto-card .imagem {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;
        border-radius: 20px;
        position: relative;
     }

    .produto-card .imagem img {
        height: 400px;
        width: 100%;
        border-radius: 15px;
        transition: .5s;
    }

    .produto-card .descricao {
        position: absolute;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        background: #35ae9c;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        animation: slide- .5s ease forwards;
        opacity: 1;
        transition: .5s;
    }

    .produto-card .descricao h4 {
        color: white;
    }

    .produto-card:hover .descricao {
        opacity: 0;
        transition: .5s;
    }

    .produto-card:hover .imagem img {
        transform: scale(1.1);
        overflow: hidden;
        transition: .5s;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .produtos-titulo {
            flex-direction: column;
            height: 100%;
        }
        .produtos-titulo h2 {
            margin-left: 20px;
            margin-right: 20px;
            text-align: center;
        }

        .produtos-titulo img {
            margin: 20px;
        }

            .produto-card .imagem img {
        height: 300px;
            }
    } 


</style>