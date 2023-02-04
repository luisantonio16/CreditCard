const carContainer = document.querySelector('.card-container')
const cardAfter = document.querySelector('.card-after')
const cardBefore = document.querySelector('.card-before')
const pNumero = document.querySelector('.card-numero-tarjeta')
const inpuntNumero = document.getElementById('inputnumero');
const pName = document.querySelector('.card-nombre-tarjeta')
const inpuntName = document.getElementById('inputnombre');
const pfirma = document.querySelector('.p-firma');
const pccv = document.querySelector('.p-ccv');
const inpuntCCV = document.getElementById('inputCcv');


cardAfter.addEventListener('click', ()=>{
    carContainer.classList.add("flipped")

});

cardBefore.addEventListener('click', ()=>{
    carContainer.classList.remove("flipped")

})

inpuntNumero.addEventListener('input' ,()=>{
    pNumero.textContent = inpuntNumero.value

});

inpuntName.addEventListener('input',()=>{
    pName.textContent = inpuntName.value
    pfirma.textContent = inpuntName.value
})

inpuntCCV.addEventListener('input',(e)=>{
    console.log(e.target);
     carContainer.classList.add("flipped")
     pccv.textContent = inpuntCCV.value

    

})
