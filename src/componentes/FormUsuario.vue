<template>
  <section>
    <div class="jumbotron">
      <div align="center" id="jumbotron2" class="jumbotron">
        <img
          src="https://cdn0.iconfinder.com/data/icons/people-and-lifestyle/64/account-people-man-user-150.png"
          alt="Icono Usuario"
        />
        <h1>Nuevo Usuario</h1>
        <hr /><br />
        <div id="jumbotron3" class="jumbotron">
          <vue-form :state="formState" @submit.prevent="enviar">
            <!-- Campos del formulario -->
            <validate tag="div">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                class="form-control"
                v-model="formData.nombre"
                name="nombre"
                required
                placeholder="Ingrese su Nombre"
              />
            </validate>

            <validate tag="div">
              <label for="dni">DNI</label>
              <input
                type="number"
                id="dni"
                class="form-control"
                v-model="formData.dni"
                name="dni"
                required
                placeholder="Ingrese su Dni"
              />
            </validate>

            <validate tag="div">
              <label for="edad">Edad</label>
              <input
                type="number"
                id="edad"
                class="form-control"
                v-model="formData.edad"
                name="edad"
                required
                placeholder="Ingrese su edad"
              />
            </validate>

            <validate tag="div">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                v-model="formData.email"
                name="email"
                required
                placeholder="Ingrese un email"
              />
            </validate>

            <validate tag="div">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="formData.password"
                name="password"
                required
                placeholder="Ingrese una password"
              />
            </validate>

            <!-- Botón Enviar -->
            <button @click="enviar()" class="btn btn-info my-3" :disabled="formState.$invalid">Enviar</button><br /><br />

            <a class="link1" href="/">Volver a inicio</a>
          </vue-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { usuariosAPI } from "@/axios"; // Asegúrate de importar correctamente usuariosAPI

export default {
  name: "FormUsuario",
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: "",
        dni: "",
        edad: "",
        email: "",
        password: "",
      };
    },
    async enviar() {
      try {
        let newUser = { ...this.formData }; // Preparamos los datos para el nuevo usuario
        console.log("Datos del nuevo usuario:", newUser); // Para depuración

        // Aquí enviamos los datos al MockAPI (usamos la API de UsuariosDB)
        const response = await usuariosAPI.postUsuario(newUser); // Usamos el método postUsuario de usuariosAPI
        console.log("Respuesta del servidor:", response.data); // Ver la respuesta de MockAPI

        alert("Usuario registrado exitosamente");
        this.formData = this.getInitialData(); // Reseteamos los datos del formulario
       
        this.$router.push("/peliculas"); // Redirigimos a otra vista, si es necesario
      } catch (error) {
        console.error("Error al crear usuario:", error.message); // Mensaje de error
        alert("Error al registrar usuario");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el formulario */
section {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.form-control {
  width: 500px;
  margin: 0 auto;
  background-color: rgba(10, 20, 26, 0.336);
  color: antiquewhite;
}

h1 {
  color: antiquewhite;
}

#jumbotron3 {
  text-align: center;
  font-size: 1.3rem;
  background-color: rgba(0, 0, 0, 0.842);
  border-radius: 5px;
}

hr {
  color: antiquewhite;
}

#jumbotron2 {
  color: antiquewhite;
  background-image: url("https://images.unsplash.com/photo-1542931415-162aeab4418f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=60");
}

.link1 {
  animation: none;
  color: rgba(220, 20, 60, 0.623);
}

.link1:hover {
  transition: all 0.8s;
  color: rgb(220, 20, 60);
}
</style>