console.log(Vue);
const app = Vue.createApp({
    /*template: `
    <h1> Hola mundo</h1>
    <p>Con Vue.js</p>
    <p>{{1+2}}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{ {nombre:'Pablo',apellido:'Simbaña'} }}</p>
    <p>{{ true? 'Activo':'Inactivo' }}</p>
    <p>{{ false? 'Activo':'Inactivo' }}</p>
    <p> 1===1 </p>
    <p>{{ 1===2 }}</p>
    `
    */
    //OPTIONS API 
    methods: {
        cambiarMensaje(){
            this.mensaje='Nuevo mensaje';
            this.edad = 30;
        }

    },
    data() {
        return {
            mensaje: 'Hola Mundo PWeb',
            edad: 25

        }
    }
})

app.mount('#myApp')