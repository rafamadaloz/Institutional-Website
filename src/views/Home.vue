<template>
  <div class="home">
      <Banner />
      <Produtos />
      <Garantia />
      <Mapa />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner';
import Produtos from '@/components/Produtos';
import Garantia from '@/components/Garantia';
import Mapa from '@/components/Mapa';

export default {
  name: 'home',
  components: {
    Banner,
    Produtos,
    Garantia,
    Mapa
  }
}
</script>
