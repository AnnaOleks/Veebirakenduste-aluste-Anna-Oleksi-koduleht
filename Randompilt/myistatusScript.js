//random pilt, mis vÕetakse pildtide massiivist
function randomPilt(){
    const pildid=[
        'img/dober.jpg',
        'img/rotti.jpg',
        'img/taks.jpg'
    ];
    //random pilt
    const pilt=Math.floor(Math.random()*pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
}

function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementu nimega "valik"
    let randomPilt=document.getElementById("randomPilt");

    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML = "Õige";
                vastus.style.backgroundColor = "slategray";
                vastus.style.color ="white";
                vastus.style.textAlign="center";
                vastus.style.padding="10px";
            } else{
                vastus.innerHTML="Vale";
                vastus.style.backgroundColor = "#65596c";
                vastus.style.color="white";
                vastus.style.textAlign="center";
                vastus.style.padding="10px";
            }
        }
    }
}

function arvuta(kogus,hind){
    return (kogus*hind).toFixed(1);
    //toFixed(1) - 1 sümbol peale komat
}

const pilt1hind=1000;
const pilt2hind=1500.5;
const pilt3hind=900;

function radioHindArvuta(){
    let vastus2=document.getElementById("vastus2");
    let pilt1=document.getElementById("pilt1");
    let pilt2=document.getElementById("pilt2");
    let pilt3=document.getElementById("pilt3");

    let kogus=document.getElementById("kogus");

    if(pilt1.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt1hind)
    } else if(pilt2.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt2hind)
    } else if(pilt3.checked){
        vastus2.innerHTML=arvuta(kogus.value, pilt3hind)
    } else{
        vastus2.innerHTML="Vali, mis koera sa soovid"
    }
}