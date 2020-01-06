<template>
  <div id="contato">
    <div class="titulo">
      <h1>Contato</h1>
    </div>
    <div class="card-contato">
      <div class="informacoes">
        <p>
          <b>Contato:</b> (51) 98954-2981
        </p>
        <p>
          <b>Whatsapp:</b> (51) 98954-2981
        </p>
        <p>
          <b>E-mail:</b> contato@foliaricolchoes.com.br
        </p>
        <br />

        <p>
          <b>Endereço:</b>
        </p>
        <p>Rua Leonardo Theobaldo Hauschild, 284</p>
        <p>B. São Cristóvão - Lajeado - RS, 95900-000</p>
        <br />

        <p>
          <b>Atendimento:</b>
        </p>
        <p>Segunda à Sexta: 8:30 às 18:00</p>
        <p>Sábado: 8:30 às 12:00</p>
      </div>
      <div class="formulario">
        <v-form class="form" ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" color="teal" :rules="nameRules" label="Nome" required filled
             background-color="white"></v-text-field>

          <v-text-field v-model="email" color="teal" :rules="emailRules" label="E-mail" required filled
            background-color="white"></v-text-field>

          <v-text-field v-model="tel" v-mask="['(##) ####-####', '(##) #####-####']" color="teal" :rules="telRules" label="Telefone" required filled
            background-color="white"></v-text-field>

          <v-textarea
              v-model="msg"
              color="teal"
              filled
                dense
              required
              :rules="msgRules"
              background-color="white"
            >
              <template v-slot:label>
                <div>
                  Mensagem
                </div>
              </template>
            </v-textarea>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">{{labelEnviar}}</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
      labelEnviar: 'Enviar',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
      ],
      tel: '',
      telRules: [
        v => !!v || 'Telefone é obrigatório',
      ],
      msg: '',
      msgRules: [
        v => !!v || 'Mensagem é obrigatório',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
           this.labelEnviar = 'Enviando...'
        const url= 'http://api.foliaricolchoes.com.br/envia-email/'
          const data = {
            nome: this.name,
            email: this.email,
            telefone: this.tel,
            mensagem: this.msg
          }
        axios.post(url, data)
          .then(res => {
            this.labelEnviar = res.data.message
            this.reset()
          })
          .catch(e => {
            this.labelEnviar = 'Enviar por e-mail'
            alert(e)
            this.reset()
          });
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>
#contato {
  margin-top: 130px;
}

#contato .titulo h1 {
  color: #35ae9c;
  text-align: center;
  padding: 20px 20px 10px 20px;
}

.card-contato {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-contato .informacoes,
.card-contato .form {
    margin: 20px;
}

.card-contato .informacoes p {
  margin-bottom: 8px !important;
}

.card-contato .informacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-contato .form {
    background: #35ae9c;
    padding: 20px;
    border-radius: 10px;
    width: 450px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .card-contato {
    flex-direction: column;
  }
  .card-contato .form {
    width: 100%;
    margin: 20px auto;
  }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
    .card-contato {
    flex-direction: column;
  }
  .card-contato .form {
    width: 100%;
    margin: 20px auto;
  }
} 

</style>