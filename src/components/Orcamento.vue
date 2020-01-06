<template>
  <div id="orcamento">
    <v-form class="form" ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="12" class="titulo">
          <h2>solicite seu orçamento</h2>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="name"
            color="teal"
            :rules="nameRules"
            label="Nome"
            required
            filled
            background-color="white"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            color="teal"
            :rules="emailRules"
            label="E-mail"
            required
            filled
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cidade"
            color="teal"
            :rules="cidadeRules"
            label="Cidade"
            required
            filled
            background-color="white"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="tel"
            v-mask="['(##) ####-####', '(##) #####-####']"
            color="teal"
            :rules="telRules"
            label="Telefone"
            required
            filled
            background-color="white"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-btn :disabled="!valid" id="btn-wpp" class="mr-4" @click="validateWpp">
            <v-icon left>{{ iconWpp }}</v-icon>Enviar por Whatsapp
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn :disabled="!valid" id="btn-email" class="mr-4" @click="validateMail">
            <v-icon left>{{ iconMail }}</v-icon>{{ labelEmail }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  data: () => ({
    labelEmail: 'Enviar por e-mail',
    iconWpp: "mdi-whatsapp",
    iconMail: "mdi-email",
    valid: true,
    name: "",
    nameRules: [v => !!v || "Nome é obrigatório"],
    email: "",
    emailRules: [
      v => !!v || "E-mail é obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail inválido"
    ],
    tel: "",
    telRules: [v => !!v || "Telefone é obrigatório"],
    cidade: "",
    cidadeRules: [v => !!v || "Cidade é obrigatório"]
  }),

  methods: {
    validateWpp() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        let msg =
          "Olá. Gostaria de um orçamento." +
          "\n\nNome: " +
          this.name +
          "\n\nE-mail: " +
          this.email +
          "\n\nTel: " +
          this.tel +
          "\n\nCidade: " +
          this.cidade;

        msg = window.encodeURIComponent(msg);
        window.open(
          `https://api.whatsapp.com/send?phone=5551989542981&text=${msg}`,
          "_blank"
        );
      }
    },
    validateMail() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.labelEmail = 'Enviando...'
        const url= 'http://api.foliaricolchoes.com.br/envia-email/'
          const data = {
            nome: this.name,
            email: this.email,
            telefone: this.tel,
            cidade: this.cidade
          }
        axios.post(url, data)
          .then(res => {
            this.labelEmail = res.data.message
            this.reset()
          })
          .catch(e => {
            this.labelEmail = 'Enviar por e-mail'
            alert(e)
            this.reset()
          });
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
#orcamento {
  border-radius: 10px;
  margin-top: 40px;
  background: #35ae9c;
  padding: 40px;
}

#orcamento .titulo {
  text-align: center;
}

#orcamento .titulo h2 {
  text-transform: uppercase;
  color: white;
  font-weight: 400;
}

#btn-wpp {
  background: #14d62e;
  width: 100%;
  color: white;
}

#btn-email {
  width: 100%;
}
</style>