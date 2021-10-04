<template>
  <div>
    <h4 class="mt-5">Ingresa tus datos para iniciar sesión</h4>
    <b-container class="mt-5 text-left">
      <b-card>
        <b-form @submit.prevent="submitForm">
          <b-form-group label="Ingresa tu correo:" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              required
              v-model="loginForm.email"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Ingresa tu contraseña:" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Mi$uperCl4v3"
              required
              v-model="loginForm.password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Ingresar</b-button>
        </b-form>
      </b-card>
      <h6 class="mt-5">
        Los datos para ingresar son:<br />Correo: pruebadecorreo@gmail.com<br />Clave:
        123456
      </h6>
    </b-container>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'Login',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    }
  }),
  methods: {
    submitForm() {
      console.log('click on submit')
      Firebase.auth()
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(
          () => {
            this.$router.push('/home')
          },
          () => {
            alert(
              `El correo o la contraseña son incorrectos. Intente Nuevamente`
            )
          }
        )
    }
  }
}
</script>

<style></style>
