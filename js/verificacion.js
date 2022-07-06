var bottom =document.getElementById("btncalcular")
bottom.addEventListener("click",ingresar);
function ingresar(){
    var usuario=document.getElementById("usuario").value;
    var contraseña=document.getElementById("contraseña").value;

    if (usuario== "antonio" &&contraseña=="1048064123"){
        alert("usuario y contraseña valido")
    }else{
        alert(
            "vuelva a intentar, usuario y/o contraseña incorrecto")


}
}
