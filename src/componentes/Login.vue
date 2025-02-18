<template>
  <section>
    <div>
      <br>
        <div class="jumbotron" :style="{'background-image': asignarImg}">
          <vue-form :state="formState" @submit.prevent="iniciarSesion()">
            <validate tag="div">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" autocomplete="off" v-model.trim="formData.email"
                name="email" required placeholder="Ingrese el Email" />
              <field-messages name="email" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
                <div slot="email" class="alert alert-danger mt-1">
                  Email no válido
                </div>
              </field-messages>
            </validate>

            <validate tag="div">
              <label for="password">Contraseña</label>
              <input type="password" id="password" class="form-control" autocomplete="off"
                v-model.trim="formData.password" name="password" required placeholder="Ingrese la Contraseña" />
              <field-messages name="password" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">
                  Campo requerido
                </div>
              </field-messages>
            </validate>

            <div v-show="$store.state.failUser" class="alert alert-danger mt-1">
              Credenciales incorrectas
            </div>

            <button class="btn btn-info my-3" :disabled="formState.$invalid">Iniciar sesion</button><br /><br />

          </vue-form>

          <a class="link1" @click="$router.push('/formUsuario')">Registrarse</a>
          <img class="foto" src="https://cdn3.iconfinder.com/data/icons/leto-space/64/__astronaut_space_suit-512.png"
            @click="$router.push('/formUsuario') ">

        </div>
    </div>
  </section>
</template>

<script>
import { usuariosAPI } from "@/axios";

export default {
  name: "src-componentes-formulario",
  components: { },
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
    };
  },
  methods: {
    getInitialData() {
      return {
        email: null,
        password: null,
      };
    },

    async iniciarSesion() {
      const user = { ...this.formData };
      const usuario = await this.validarUsuario(user);

      if (usuario) {
        this.$store.dispatch(usuario.isAdmin ? 'loguearseAdmin' : 'loguearse', usuario);
        alert('Bienvenido/a ' + usuario.nombre);
        this.$router.push('/'); // Redirigir al home después de iniciar sesión
      } else {
        alert('Credenciales invalidas')
        this.$store.dispatch('failLogin');
      }

      this.limpiarForm();
    },

    async validarUsuario(user) {
      try {
        // Obtener todos los usuarios registrados en MockAPI
        const response = await usuariosAPI.getUsuarios("UsuariosDB");
        // Buscar el usuario con el email y la contraseña ingresados
        const usuario = response.data.find(u => u.email === user.email && u.password === user.password);        
        return usuario || null; // Retornar el usuario si se encuentra, sino `null`       
      } catch (error) {
        console.error('Error en validarUsuario', error.message);
      }
    },

    limpiarForm() {
      this.formData = this.getInitialData();
      if (this.formState._reset) {
    this.formState._reset();  // Asegura que Vue Form borre el estado de validación
  }
    },

    getRandom() {
      return Math.floor(Math.random() * 20);
    }
  },

  computed: {
    asignarImg() {
      let numero = this.getRandom();
      return numero > 10 ? this.im3 : numero > 5 ? this.im2 : numero > 3 ? this.im0 : this.im1;
    }
  }
};
</script>

<style scoped>

</style>