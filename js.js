luz = false


function onoff(){

    if (luz){
        document.querySelector('.imagem').innerHTML = '<img src="off2.jpg" alt="">'
        luz = false
    }
    
    else{
        document.querySelector('.imagem').innerHTML = '<img src="on2.jpg" alt="">'
        luz = true
    }



}
