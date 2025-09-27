const wiki = document.querySelector('#wiki');
const submit = document.querySelector('#submit');
const textarea = document.querySelector('#text');



wiki.href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"; //

submit.addEventListener('click', (e) => {   //
    textarea.value.toLowerCase();
    if (textarea.value !== "oui" && textarea.value !== "non") {
        textarea.value = "Il faut mettre Oui ou Non";
    }
});

//----------------------------------------------------------------------------------------------------------------------

const rd1=document.getElementById('c1').nextSibling;
const rd2=document.getElementById('c2').nextSibling;
const rd3=document.getElementById('c3').nextSibling;
rd1.textContent = "HP";
rd2.textContent = "Casque";
rd3.textContent = "Bluetooth";

//----------------------------------------------------------------------------------------------------------------------

const choix = document.querySelectorAll('input[name="choix"]');
const namevolume = document.querySelector('label[for="volume"]');

choix.forEach(choix =>{
    choix.addEventListener('change', function() {
        if (this.value ==="1"){
            namevolume.textContent="Volume HP";
        }
        if (this.value ==="2"){
            namevolume.textContent="Volume Casque";
        }
        if (this.value==="3"){
            namevolume.textContent="Volume Bluetooth";
        }
    })
})

const volume =document.getElementById('volume');
volume.max=100;
console.log(volume.max);

const valeurVolume = document.getElementById('value_volume');

function updateValue(slide){
    valeurVolume.textContent = slide.value;
}

const descriptionCase =document.querySelector('label[for="checkbox1"]');
descriptionCase.textContent = "Mute";

const caseCheck =document.getElementById('checkbox1');

caseCheck.oninput =function(){
    if(this.checked){
        valeurVolume.textContent= "X";
        volume.disabled= true;
    }
    else{
        volume.disabled=false;
        valeurVolume.textContent= volume.value;
    }
}

//----------------------------------------------------------------------------------------------------------------------

const main = document.querySelector('main');
const img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
img.width = 200;

main.appendChild(img);

//----------------------------------------------------------------------------------------------------------------------

const header = document.querySelector('header');//On utilisera le main déclarer juste avant.
const footer = document.querySelector('footer');
const CBM1 = document.getElementById('checkboxM1');
const CBM2 = document.getElementById('checkboxM2');
const CBM3 = document.getElementById('checkboxM3');

window.addEventListener('change', ()=>{
    let checkboxM= [CBM1,CBM2,CBM3];
    let part = [header,main,footer];

    for (let i = 0; i < part.length; i++){
        if(checkboxM[i].checked){
            part[i].style.display="block";
        }
        else{
            part[i].style.display="none";
        }
    }


/*
if(CBM1.checked){header.style.display="block";}else{header.style.display="none";}
if(CBM2.checked){main.style.display="block";}else{main.style.display="none";}
if(CBM3.checked){footer.style.display="block";}else{footer.style.display="none";}
*/

})

// Ici je m'explique pourquoi j'ai utiliser les 2 listes "checkboxM" et "part"
// car ayant réussit avec les if juste avant ce paragraphe j'ai voulu perfectionner en créant des liste.

//----------------------------------------------------------------------------------------------------------------------