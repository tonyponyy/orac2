var  peticion = () => {
	fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
      .then(response => response.json())
      .then(json => imprimir(json))
}
var imprimir = (num)=>{
	resultado  = num.data[0]; 
	porcentaje = (resultado/255)*100
	direccion  = (resultado/255)*360 
    document.getElementById("barras").style.width = porcentaje+"%" 
	document.getElementById("triangle").style.transform = 'rotate('+direccion+'deg)' 
}