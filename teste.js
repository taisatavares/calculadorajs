const btn_somar=document.querySelector("#btn_somar")
const btn_subtrair=document.querySelector("#btn_subtrair")
const btn_multiplicar=document.querySelector("#btn_multiplicar")
const btn_dividir=document.querySelector("#btn_dividir")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const valores=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(valores[0])+Number(valores[1])
        
    },
    ()=>{
        const valores=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(valores[0])-Number(valores[1])
    }, 
    ()=>{
        const valores=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(valores[0])*Number(valores[1])
    },   
    ()=>{
        const valores=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        res.value=Number(valores[0])/Number(valores[1])
    }
]

btn_somar.addEventListener("click",op[0])
btn_subtrair.addEventListener("click",op[1])
btn_multiplicar.addEventListener("click",op[2])
btn_dividir.addEventListener("click",op[3])