
var contenedor = "" 
var potenciaV = false; 
function botonNU(numero){
    document.getElementById("tabla").value += numero
    contenedor = ""
    contenedor += parseInt(document.getElementById("tabla").value)
    console.log(contenedor)
}

function botonOP(operador){
  if(document.getElementById("tabla").value == ""){
  
    document.getElementById("tabla").value += "0" + operador
  }
  else if(document.getElementById("tabla").value){
    let borrar = document.getElementById("tabla").value
    switch(borrar.slice(-1)){
      case "+":
        document.getElementById("tabla").value = borrar.slice(0,-1)
        document.getElementById("tabla").value += operador 
        break;
      case "-": 
      document.getElementById("tabla").value = borrar.slice(0,-1)
      document.getElementById("tabla").value += operador
      break;
      case "*":
        document.getElementById("tabla").value = borrar.slice(0,-1)
        document.getElementById("tabla").value += operador
        break;
      case "/":
        document.getElementById("tabla").value = borrar.slice(0,-1)
        document.getElementById("tabla").value += operador
        break;
        default:
          document.getElementById("tabla").value += operador
        
    }


  }
  else{document.getElementById("tabla").value += operador;}
}
function borrarTodo(){
  document.getElementById("tabla").value = ""
  contenedor = "" 
}
function borrar(){
  let borrar = document.getElementById("tabla").value
  document.getElementById("tabla").value = borrar.slice(0,-1)
}
function igual(){
  let tabla = document.getElementById("tabla").value
  if(potenciaV == true){
    let despues = tabla.indexOf("^");
    let ultimos = tabla.substring(despues+1,tabla.length)
    document.getElementById("tabla").value = (parseInt(contenedor) ** parseInt(ultimos))
    potenciaV = false;
  }
else {document.getElementById("tabla").value = eval(document.getElementById("tabla").value)}
}
function potencia(){
contenedor = document.getElementById("tabla").value 
document.getElementById("tabla").value += "^"
potenciaV = true;
}
function raiz(){
  document.getElementById("tabla").value = Math.sqrt(document.getElementById("tabla").value)

}
