function verif(){

    var tem=document.getElementById('tem')
    var verif=document.getElementById('verif')
    var img=document.getElementById('img')

    var tex=document.getElementById('tex')

    var tem=String(tem.value)

    if(tem>=5 && tem<=11){
        tex.innerHTML=`Agora são ${tem} horas da manha, Bom dia !!`

        document.body.style.backgroundColor="#006DCD"

        img.src="imgs/dia.jpg"
        
    }else if(tem>=12 && tem<=18){
        tex.innerHTML=`Agora são ${tem} horas da tarde, Boa tarde !!`;


        document.body.style.backgroundColor="#B06E18"

        img.src="imgs/tarde.jpg"
    }else if(tem>=19 && tem<=23){
        tex.innerHTML=`Agora são ${tem} horas da noite, Boa noite !!`

        document.body.style.backgroundColor="#002035"

        img.src="imgs/noite.jpg"
    }else if(tem>=00 && tem<=4){
        tex.innerHTML=`Agora são ${tem} da madrugada, Boa noite !!`

        document.body.style.backgroundColor="#002035"

        img.src="imgs/noite.jpg"
    }else if(tem>=24){
        window.alert("[ERRO] Horario invalido")
    }

}