<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo_branco.png" />
    </div>

    <div class="btn-orcamento">
      <a href="https://api.whatsapp.com/send?phone=5551989542981" target="_blank">Solicite seu orçamento</a>
    </div>

    <div class="linksbar" style>
      <div class="bar-triang">
        <div class="bar">
          <li class="links">
            <ul>
              <router-link to="/">Home</router-link>
            </ul>
            <ul>
              <router-link to="/empresa">Empresa</router-link>
            </ul>
            <ul>
              <router-link to="/colchoes">Colchões</router-link>
            </ul>
            <ul>
              <router-link to="/poltronas">Poltronas</router-link>
            </ul>
            <ul>
              <router-link to="/depoimentos">Depoimentos</router-link>
            </ul>
            <ul>
              <router-link to="/contato">Contato</router-link>
            </ul>
          </li>
        </div>
      </div>
    </div>

    <Menu right class="menu-toggle">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/empresa">
        <span>Empresa</span>
      </router-link>
      <router-link to="/colchoes">
        <span>Colchões</span>
      </router-link>
      <router-link to="/poltronas">
        <span>Poltronas</span>
      </router-link>
      <router-link to="/depoimentos">
        <span>Depoimentos</span>
      </router-link>
      <router-link to="/contato">
        <span>Contato</span>
      </router-link>
    </Menu>
  </div>
</template>

<script>
import { Menu } from "vue-burger-menu";
export default {
  components: { Menu },
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style>
.navbar {
  /*         background-color: rgba(88, 88, 88, 0.532);
 */
  background-color: #35ae9c;
  height: 130px;
  position: fixed;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 10px;
  padding-top: 10px;
  display: grid;
  width: 100%;
  grid-template-columns: 16% 84%;
  grid-template-areas:
    "logo btn-orcamento"
    "logo links-bar";
  z-index: 999;
}

.links {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
}

.links ul {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
  cursor: pointer;
  color: #35ae9c;
  font-weight: 700;
  transition: 0.5s;
  text-transform: uppercase;
}

.links ul:hover {
  background: #35ae9c;
  color: white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.links ul a {
  color: #35ae9c;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}

.links ul:hover a {
  color: white;
  text-decoration: none;
}

.bar-triang {
  width: 90%;
  border-left: 50px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 50px solid white;
}

.bar {
  position: absolute;
  height: 50px;
  right: 80px;
}

.linksbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.logo {
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.logo img {
  width: 170px;
}

.btn-orcamento {
  grid-area: btn-orcamento;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
}

.btn-orcamento a {
  background: rgb(34, 180, 34);
  color: white !important;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 30px 5px 30px;
  text-decoration: none;
}

.linksbar {
  grid-area: links-bar;
}

.menu-toggle {
  grid-area: menu-toggle;
  display: none;
}

.bm-burger-bars {
  background-color: white !important;
}

.bm-menu {
  background: white !important;
}

.bm-item-list {
  color: #35ae9c !important;
}

.bm-item-list > * > span {
  margin-left: 10px !important;
  font-weight: 700 !important;
  color: #35ae9c !important;
}

.bm-burger-button {
  top: 70px !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar {
    padding: 0;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "logo btn-orcamento"
      "logo menu-toggle";
    align-items: center;
    justify-content: center;
    height: 130px;
  }
  .linksbar {
    display: none;
  }
  .logo img {
    width: 130px;
  }

  .menu-toggle {
    display: initial;
  }

  .btn-orcamento a {
    font-size: 8px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1100px) {
  .navbar {
    padding: 0;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "logo btn-orcamento"
      "logo menu-toggle";
    align-items: center;
    justify-content: center;
    height: 130px;
  }
  .linksbar {
    display: none;
  }
  .logo img {
    width: 130px;
  }

  .menu-toggle {
    display: initial;
  }
}
</style>