function puhastaJS(){
    let vastus=document.getElementById("vastus");
    let vastus2 = document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");
    let vastus6=document.getElementById("vastus6");
    let vastus8=document.getElementById("vastus8");
    let vastus9=document.getElementById("vastus9");
    let vastus10=document.getElementById("vastus10");
    let vastus11 = document.getElementById("vastus11");
    let vastus12=document.getElementById("vastus12");
    let vastused=document.getElementById("vastused");

    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus8.innerHTML="";
    vastus9.innerHTML="";
    vastus10.innerHTML="";
    vastus11.innerHTML="";
    vastus12.innerHTML="";
    vastused.innerHTML="";
}

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
function varvJS(){
    let vastus10=document.getElementById("vastus10");
    let varv=document.getElementById("varv");

    vastus10.innerHTML="See on lapse limmikvärv";
    vastus10.style.color= varv.value;
}
function synJS(){
    document.getElementById("vastus11").innerHTML=
        "Lapse sünnipäev: " +
        document.getElementById("syn").value;
}
function meelJS(){
    document.getElementById("vastus12").innerHTML=
        "Laps on rahulik (0-10): "+
        document.getElementById("meel").value;
}

function salvestaJS(){

    let vastused=document.getElementById("vastused");
    let vaneesnimi =document.getElementById("vaneesnimi");
    let vanperenimi=document.getElementById("vanperenimi");
    let email=document.getElementById("email");
    let tel=document.getElementById("tel");
    let nimi=document.getElementById("nimi");
    let vanus=document.getElementById("vanus");
    let varv=document.getElementById("varv");
    let syn=document.getElementById("syn");
    let meel=document.getElementById("meel");
    let kool=document.getElementById("kool");
    let poiss=document.getElementById("poiss");
    let tydruk=document.getElementById("tydruk");
    let foto=document.getElementById("foto");

    if(poiss.checked){
        sugu="Lapse sugu: "+poiss.value;
    } else if(tydruk.checked){
        sugu="Lapse sugu: "+tydruk.value;
    } else{
        sugu="Pole määratud";
    }

    vastused.innerHTML=
        "Vanema nimi: " + vaneesnimi.value + " " + vanperenimi.value + "<br>" +
        "E-mail: " + email.value + "<br>" +
        "Telefon: " + tel.value + "<br>" +
        "Lapsenimi: " + nimi.value + "<br>" +
        "Lapse vanus: " + vanus.value + "<br>" +
        "Lapse sünnipäev: " + syn.value + "<br>" +
        sugu + "<br>" +
        "Laps käib: " + kool.value + "<br>" +
        "Laps on rahulik (0-10): "+ meel.value + "<br>" +
        "Lemmikvärv: <span style='color:" + varv.value + ";'>" + varv.value + "</span>";

    // Добавление фото (списано у чата гпт)
    if (foto.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "200px"; // Ограничиваем размер
            img.style.display = "block";
            vastused.appendChild(document.createElement("br"));
            vastused.appendChild(img);
        };
        reader.readAsDataURL(foto.files[0]);
    }
}
