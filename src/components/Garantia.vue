<template>
    <div id="garantia">
        <div class="fundo-branco garantia">
            <div class="item">
                <div class="imagem">
                    <img width="90px" src="@/assets/garantia/pronta-entrega.png" alt="">
                </div>
                <div class="descricao">
                    <p>Pronta entrega</p>
                </div>
            </div>
            <div class="item">
                <div class="imagem">
                    <img width="90px" src="@/assets/garantia/garantia-total.png" alt="">
                </div>
                <div class="descricao">
                    <p>Garantia total</p>
                </div>
            </div>
             <div class="item">
                <div class="imagem">
                    <img width="80px" src="@/assets/garantia/prancheta.png" alt="">
                </div>
                <div class="descricao">
                    <p>Entregamos no Vale do Taquari</p>
                </div>
            </div>
            <div class="item">
                <div class="imagem">
                    <img width="90px" src="@/assets/garantia/frete-gratis.png" alt="">
                </div>
                <div class="descricao">
                    <p>Frete grátis</p>
                </div>
            </div>
            <div class="item">
                <div class="imagem">
                    <img width="90px" src="@/assets/garantia/alto-padrao.png" alt="">
                </div>
                <div class="descricao">
                    <p>Produtos de Alto Padrão e Custo-Benefício</p>
                </div>
            </div>
            <div class="item">
                <div class="imagem">
                    <img width="90px" src="@/assets/garantia/parcelamento.png" alt="">
                </div>
                <div class="descricao">
                    <p>Parcelamento em até 12x sem juros</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#garantia {
    width: 100%;
    background: url('../assets/fundo-garantia.png') fixed;
    background-size: 100%;
}

.garantia {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.fundo-branco {
    background: rgba(255, 255, 255, 0.473);
    width: 100%;
    height: 100%;
}


.item .descricao p {
    color: rgb(95, 95, 95);
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 220px;
    margin: 20px 30px 20px 30px;
}

</style>