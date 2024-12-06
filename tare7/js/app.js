const personas = [

];
const app = Vue.createApp({

    methods: {
        agregarPersona() {
            if (this.nombre === null || this.apellido === null || this.hobby === null || this.lugarNacimiento === null) {
                this.mensaje = "DATOS INCOMPLETOS";
            } else {

                const nuevaPersona = {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    hobby: this.hobby,
                    lugarNacimiento: this.lugarNacimiento
                }
                this.listaPersonas.unshift(nuevaPersona);
                this.formularioVacio();
                this.mensaje = null;
            }
        },
        formularioVacio() {
            this.nombre = null;
            this.apellido = null;
            this.hobby = null;
            this.lugarNacimiento = null;
        }
    },
    data() {
        return {
            listaPersonas: personas,
            nombre: null,
            apellido: null,
            hobby: null,
            lugarNacimiento: null,
            mensaje: null
        }
    }
})
app.mount('#app')