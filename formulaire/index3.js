const wiki = document.querySelector('#wiki');
const submit = document.querySelector('#submit');
const textarea = document.querySelector('#text');



wiki.href="https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal"; //(1)

submit.addEventListener('click', (e) => {   //(2)
    textarea.value.toLowerCase();
    if (textarea.value !== "oui" && textarea.value !== "non") {
        textarea.value = "Il faut mettre Oui ou Non";
    }
});

// (3)
const rd1=document.getElementById('c1').nextSibling;
const rd2=document.getElementById('c2').nextSibling;
const rd3=document.getElementById('c3').nextSibling;
rd1.textContent = "HP";
rd2.textContent = "Casque";
rd3.textContent = "Bluetooth";

// (4)
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

// (5)