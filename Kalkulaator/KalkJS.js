function autovalikJS(){
    let valik = document.getElementById("valik");
    let auto1 = document.getElementById("auto1");
    let auto2 = document.getElementById("auto2");
    let auto3 = document.getElementById("auto3");
    let auto4 = document.getElementById("auto4");
    let auto5 = document.getElementById("auto5");
    let auto6 = document.getElementById("auto6");

    if (auto1.checked){
        valik.innerHTML=
            "<img src='img/AudiA5.jpg' width='200'><br>Audi";
    } else if (auto2.checked){
        valik.innerHTML=
            "<img src='img/BMWm6.jpg' width='200'><br>BMW";
    } else if (auto3.checked){
        valik.innerHTML=
            "<br> <img src='img/JAGUARXF.jpg' width='200'><br>Jaguar";
    } else if (auto4.checked){
        valik.innerHTML=
            "<br> <img src='img/MercedesCLS63AMG.jpg' width='200'><br>Mercedes-Benz";
    } else if (auto5.checked){
        valik.innerHTML=
            "<br> <img src='img/ChevroletCamaro.jpg' width='200'><br>Chevrolet";
    } else if (auto6.checked){
        valik.innerHTML=
            "<br> <img src='img/FordMustangV6.jpg' width='200'><br>Ford";
    } else {
        valik.innerHTML="Sa pead midagi valima"
    }
}

function vabaauto(){
    const autod=[
        'img/AudiA5.jpg',
        'img/BMWm6.jpg',
        'img/JAGUARXF.jpg',
        'img/MercedesCLS63AMG.jpg',
        'img/ChevroletCamaro.jpg',
        'img/FordMustangV6.jpg',
    ];
    //random pilt
    const pilt=Math.floor(Math.random()*autod.length);
    const rpilt=autod[pilt];
    const vabaauto=document.getElementById("vabaauto");

    vabaauto.src=rpilt;
}

function arvuta(paevad,hind,tagatis){
    return (paevad*hind+tagatis).toFixed(2);
    //toFixed(1) - 1 sümbol peale komat
}

const auto1hind=50.50;
const auto1tagatis=100;
const auto2hind=85;
const auto2tagatis=100;
const auto3hind=100.50;
const auto3tagatis=150;
const auto4hind=125;
const auto4tagatis=150;
const auto5hind=150.50;
const auto5tagatis=200;
const auto6hind=175;
const auto6tagatis=200;

function summaArvuta(){
    let tasumisele=document.getElementById("tasumisele");
    let auto1=document.getElementById("auto1");
    let auto2=document.getElementById("auto2");
    let auto3=document.getElementById("auto3");
    let auto4=document.getElementById("auto4");
    let auto5=document.getElementById("auto5");
    let auto6=document.getElementById("auto6");

    let paevad=document.getElementById("paevad");

    if(auto1.checked){
        tasumisele.innerHTML = "Kokku: " +arvuta(paevad.value, auto1hind, auto1tagatis);
    } else if(auto2.checked){
        tasumisele.innerHTML = "Kokku: " + arvuta(paevad.value, auto2hind, auto2tagatis);
    } else if(auto3.checked) {
        tasumisele.innerHTML = "Kokku: " + arvuta(paevad.value, auto3hind, auto3tagatis);
    } else if(auto4.checked) {
        tasumisele.innerHTML = "Kokku: " + arvuta(paevad.value, auto4hind, auto4tagatis);
    } else if(auto5.checked) {
        tasumisele.innerHTML = "Kokku: " + arvuta(paevad.value, auto5hind, auto5tagatis);
    } else if(auto6.checked) {
        tasumisele.innerHTML = "Kokku: " + arvuta(paevad.value, auto6hind, auto6tagatis);
    } else{
        tasumisele.innerHTML="Vali, mis autot sa soovid";
    }
}