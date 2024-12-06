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
        agregarFrase(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase={
                frase: this.frase,
                autor:this.autor
            }
            this.listaFrases.unshift(nuevaFrase);
        },
        agregarFraseFinal(){
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase={
                frase: this.frase,
                autor:this.autor
            }
            this.listaFrases.push(nuevaFrase);
        }, 
        eventoKeyPress({charCode,cancelable,key,keyCode,target}){
            if(key==='Enter'){
                console.log('Evento');
                //console.log(event);
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }  
        }, 
        eventoKeyPressModificador(event){
                console.log('Evento');
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target.baseURI);
                //this.agregarFraseFinal();
        }
    },
    data() {
        return {
            listaFrases:frases,
            frase:null,
            //autor:'sin autor'
            autor:null,


        }
    }
})

app.mount('#myApp')