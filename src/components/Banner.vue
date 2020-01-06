<template>
    <div id="home">
        <v-img id="banner-desktop" src="@/assets/banner-desktop.png">
        </v-img>
        <v-img id="banner-mobile" src="@/assets/banner-mobile.png">
        </v-img>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #home {
        width: 100%;
        margin-top: 130px;
    }

    #banner-mobile {
        display: none;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #banner-mobile {
            display: block;
        }
        #banner-desktop {
            display: none;
        }
    } 

</style>