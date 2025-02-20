function vaneesnimiJS(){
    //innerHTML - genereerib vastus kohal id=vastus
    document.getElementById("vastus").innerHTML=
        "Vanema eesnimi: "+
        document.getElementById("vaneesnimi").value;
}

function vanperenimiJS(){
    document.getElementById("vastus2").innerHTML=
        "Vanema perenimi: "+
        document.getElementById("vanperenimi").value;
}

function emailJS(){
    document.getElementById("vastus3").innerHTML=
        "Kontakt e-mail: "+
        document.getElementById("email").value;
}

function telJS(){
    document.getElementById("vastus4").innerHTML=
        "Kontakt telefon: "+
        document.getElementById("tel").value;
}

function nimiJS(){
    document.getElementById("vastus5").innerHTML=
        "Lapse nimi: "+
        document.getElementById("nimi").value;
}

function vanusJS(){
    document.getElementById("vastus6").innerHTML=
        "Lapse vanus: "+
        document.getElementById("vanus").value;
}

function suguJS(){
    let vastus8=document.getElementById("vastus8");
    let poiss=document.getElementById("poiss");
    let tydruk=document.getElementById("tydruk");

    if(poiss.checked){
        vastus8.innerHTML="Lapse sugu: "+poiss.value;
    } else if(tydruk.checked){
        vastus8.innerHTML="Lapse sugu: "+tydruk.value;
    } else{
        vastus8.innerHTML="Sa pead midagi valima";
    }
}

function koolJS(){
    let vastus9=document.getElementById("vastus9");
    let kool=document.getElementById("kool");

    if(kool.selectedIndex!==0){
        //!==0 не равно 0 (не нулевая строка)
        vastus9.innerHTML="Laps käib: "+kool.value;
    } else{
        vastus9.innerHTML="Palun tee lahtri ripploendi ja vali midagi head!"+kool.value;
    }
}




