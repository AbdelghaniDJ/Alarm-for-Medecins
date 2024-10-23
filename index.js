let i = prompt("Enter Your First Medecine Time");

let j = prompt("Enter Your Second Medecin Time");

function firstMed(){
    let date = new Date();
    let b = 0;
    if (date.getHours() <= i) {
        b =  i - date.getHours();
    }
    else {
        b = 24 - date.getHours();
    }
    return b * 360000;

}

function secondMed(){
    let date = new Date();
    let a = 0;
    if (date.getHours() <= j) {
        a =  j - date.getHours();
    }
    else {
        a = 60 - date.getHours();
    }
    return a * 3600000;
            
}


function run(){
    setTimeout(() => {
        document.getElementById("index").play();
      }, firstMed());
    
      setTimeout(() => {
        document.getElementById("index").play();
      }, secondMed());
}


