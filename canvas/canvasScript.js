//canvas puhastamine
function kustuta(){
    const pyhi=document.getElementById("pyhi");
    if(pyhi.getContext){
        let p=pyhi.getContext("2d"); //canvas nimi(p)
        p.clearRect(0,0,400,300)
    }
}

function ring(){
    const pyhi=document.getElementById("pyhi");
    let radius=document.getElementById("radius");
    if(pyhi.getContext){
        let p=pyhi.getContext("2d"); //canvas nimi(p)
        //joonistame ümberjooni - окружность
        p.beginPath();//algab tee
        p.arc(50, 50, 20,0, 2*Math.PI, true);
        p.strokeStyle="slategray";
        p.stroke(); //käsk "Joonista"

        //ring
        p.beginPath();//algab tee
        p.arc(100, 50, radius.value,0, 2*Math.PI, true);
        p.fillStyle="slategray";
        p.fill(); //käsk "Joonista"
    }
}

//ristkülik
function ristkylik(){
    const pyhi=document.getElementById("pyhi");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(pyhi.getContext){
        let p=pyhi.getContext("2d"); //canvas nimi(p)
        p.fillStyle="slategray";
        p.fillRect(100,200,laius.value,korgus.value) //x,y,width,height
    }
}

function joon(){
    const pyhi=document.getElementById("pyhi");
    if(pyhi.getContext) {
        let p = pyhi.getContext("2d"); //canvas nimi(p)
        //joon
        p.beginPath();
        p.strokeStyle = "slategray";
        p.lineWidth = "2";
        p.moveTo(300, 60); //alguspunkt
        p.lineTo(100, 60); //lopppunkt
        p.stroke();
        //kolmnurk
        p.beginPath();
        p.strokeStyle = "slategray";
        p.lineWidth = "2";
        p.fillStyle = "slategray";
        p.moveTo(50, 100); //alguspunkt
        p.lineTo(150, 100);
        p.lineTo(150, 250);
        p.lineTo(50, 100);//lopppunkt
        p.stroke();
        p.fill()
    }
}