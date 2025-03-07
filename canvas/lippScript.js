function eestilipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }
}

function prantslipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,110,210);
        l.fillStyle="red";
        l.fillRect(220,0,110,210);
    }
}

function sveitslipp(){
    const lippruut=document.getElementById("lippruut");
    if(lippruut.getContext){
        let lr=lippruut.getContext("2d");
        lr.fillStyle="red";
        lr.fillRect(0,0,250,250);
        lr.fillStyle="white";
        lr.fillRect(100,50,50,50);
        lr.fillStyle="white";
        lr.fillRect(50,100,150,50);
        lr.fillStyle="white";
        lr.fillRect(100,150,50,50);
    }
}

function kreekalipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="white";
        l.fillRect(0,0,330,210);
        l.fillStyle="#46b1fa";
        l.fillRect(0,0,46.7,46.7);
        l.fillStyle="#46b1fa";
        l.fillRect(70,0,46.7,46.7);
        l.fillStyle="#46b1fa";
        l.fillRect(0,70,46.7,46.7);
        l.fillStyle="#46b1fa";
        l.fillRect(70,70,46.7,46.7);
        l.fillStyle="#46b1fa";
        l.fillRect(116.7,0,213.3, 23.3);
        l.fillStyle="#46b1fa";
        l.fillRect(116.7,46.7,213.3, 23.3);
        l.fillStyle="#46b1fa";
        l.fillRect(116.7,93.3,213.3, 23.3);
        l.fillStyle="#46b1fa";
        l.fillRect(0,140,330, 23.3);
        l.fillStyle="#46b1fa";
        l.fillRect(0,186.7,330, 23.3);
    }
}

function vatiklipp(){
    const lippruut=document.getElementById("lippruut");
    if(lippruut.getContext){
        let l=lippruut.getContext("2d");
        l.fillStyle="yellow";
        l.fillRect(0,0,125,250);
        l.fillStyle="white";
        l.fillRect(125,0,125,250);
        let img = new Image();
        img.src = 'gerb.png';
        img.onload = function () {
            l.drawImage(img,147.5,65,80,120);
        }
    }
}

function kustutalippruut(){
    const lippruut=document.getElementById("lippruut");
    if(lippruut.getContext){
        let lrk=lippruut.getContext("2d"); //canvas nimi(p)
        lrk.clearRect(0,0,250,250)
    }
}

function kustutalipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let lk=lipp.getContext("2d"); //canvas nimi(p)
        lk.clearRect(0,0,330,210)
    }
}

/*Lipud:
1-nagu FRA
2-Sveits
3-Oma valik
4-kus on lisatud pilt(vapp)
*Kustuta nupp */

/* Ülesanne MAJAKE:
majake peab olema joonistatud:
sein, aken, katus, uks, korsten
ja lisa veel midagi omamoodi
Kokku peab olema 6-8 nuppu
Lisa kustuta ja joonista koik korraga
 */