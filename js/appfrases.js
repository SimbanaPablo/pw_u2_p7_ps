const frases = [
    {frase:'El que madruga dios le ayuda', autor:'Pepito Perez'},
    {frase:'Quian a buen arbol se arima...', autor:'Juan Polo'},
    {frase:'Mas vale pajaro en mano que siento volando', autor:'Anmdrea Marte'},
    {frase:'De tal palo tal astilla', autor:'Julia Carlo'},
    {frase:'En casa de herrero cuchillo de palo', autor:'Ada Jimenez'},
    {frase:'Quien con lobo se junta a aullar aprende', autor:'Tarma Gonzalez'},
]
const app = Vue.createApp({
    methods: {
    },
    data() {
        return {
            listaFrases:frases


        }
    }
})

app.mount('#myApp')