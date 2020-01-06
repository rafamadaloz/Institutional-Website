<template>
    <div id="rodape">
        <v-row>
        <v-col md="3" cols="12" sm="6" class="logo-e-social">
            <div class="logo">
                <img width="100px" src="@/assets/logo_branco.png" alt="">
            </div>
            <div class="redes-sociais">
                <a href="https://www.facebook.com/pg/foliaricolchoes.com.br/" target="_blank"><img width="28px" src="@/assets/facebook.png" alt=""></a>
                <a href="https://www.instagram.com/foliaricolchoes/" target="_blank"><img width="28px" src="@/assets/instagram.png" alt=""></a>
            </div>
        </v-col>
        <v-col md="2" cols="12" sm="6" class="contato">
            <h4>Contato</h4>
            <p>contato@foliaricolchoes.com.br</p>
            <p>(51) 98954-2981</p>
            <div class="whatsapp">
                <img width="40px" src="@/assets/whatsapp.png" alt="">
                <a href="https://api.whatsapp.com/send?phone=5551989542981" target="_blank">(51) 98954-2981</a>
            </div>
        </v-col>
        <v-col md="3" cols="12" sm="6" v class="atendimento">
            <h4>Atendimento</h4>
            <p>Segunda à Sexta</p>
            <p><b>8:30 às 18:00</b></p>
            <p>Sábado</p>
            <p><b>8:30 às 12:00</b></p>
            <p>R. Leonardo Theobaldo Hauschild, 284</p>
            <p>B. São Cristóvão - Lajeado - RS</p>
            <p>95900-000</p>
        </v-col>
        <v-col md="4" cols="12" sm="6" class="frame-fb">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffoliaricolchoes.com.br%2F%3Fref%3Dbr_rs&tabs&width=340&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="180" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #rodape {
        background-color: #35ae9c;
        max-width: 100%;
    }

    #rodape p {
        font-size: 14px;
        color: white;
        margin-bottom: 5px !important;
    }

    #rodape h4 {
        margin-bottom: 10px;
        color: white;
        text-transform: uppercase;
        font-weight: 800;
    }

    .redes-sociais a {
        margin-left: 10px;
        margin-right: 10px;
    }

    .redes-sociais {
        margin-top: 20px;
    }

    .whatsapp a {
        padding: 3px 10px 3px 20px;
        background: rgb(0, 194, 0);
        border-radius: 10px;
        color: white !important;
        font-size: 14px;
        text-decoration: none;
    }

    .whatsapp {
        display: flex;
        align-items: center;
    }

    .whatsapp img {
        border-radius: 50%;
        float: left;
        transform: translateX(14px);
    }

    .logo-e-social,
    .frame-fb,
    .atendimento,
    .contato {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    
</style>