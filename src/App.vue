<template>
  <v-app>
    <v-content>
      <Header/>
      <router-view/>
      <Rodape />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Rodape from './components/Rodape';

export default {
  name: 'App',
  components: {
    Header,
    Rodape,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
