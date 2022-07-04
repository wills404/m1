//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
document.write(_pet2);



//var 12 = 'numero';
var inter = document.getElementById('inter')
var peru = document.getElementById('peru')
var ita = document.getElementById('ita')


function colore(){
    alert('ciao');
    inter.style.backgroundColor = 'green'
    
}
var n1 = 1
var n2 = 1

function colore2(){
    alert('stacca stacca');
    peru.style.backgroundColor = 'purple'
   peru.style.display = 'flex'
   peru.style.width = '100px'
   
   
}
function colore3(){
    alert('ci stanno rintracciando ');
    ita.style.backgroundColor = 'yellow'
  ita.style.display = 'flex'
  ita.style.width = '200px'
  ita.style.position = 'absolute'
   ita.style.left = '90px' 
   

   
   ita.style.animationName = 'animazione1'
   ita.style.animationDuration = '4s'
   ita.style.animationIterationCount = 'infinite'
   ita.style.animationDelay = '0.6s'

   
}

function divisione(){
   return n1 / n2
  
}

divisione(n1=3, n2=6);
console.log(n1 / n2);

//squadra di william


/*animazione
.bottone{
    animation-name: animazione4;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-delay: 0.6s;
}

@keyframes animazione4 {
    0%{transform:  scale(1);
        box-shadow:   3px 3px 10px #000;
    }
    50%{
        box-shadow: 2px 3px 3px 6px #000;
    }
    100%{transform:  scale(1.3);
        box-shadow:   3px 3px 10px #000;
    }
    
}

.span2{
    animation-name: animazione2;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-delay: 0.6s;
}

@keyframes animazione2 {
    0%{transform:  scale(1);
        box-shadow:   3px 3px 10px white;
    }
    50%{
        box-shadow: 2px 3px 3px 6px green;
    }
    100%{
        box-shadow:   3px 3px 10px #000;
    }
    
}*/