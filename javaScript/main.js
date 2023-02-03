const carContainer = document.querySelector('.card-container')
const cardAfter = document.querySelector('.card-after')
const cardBefore = document.querySelector('.card-before')


cardAfter.addEventListener('click', ()=>{
    carContainer.classList.add("flipped")

});

cardBefore.addEventListener('click', ()=>{
    carContainer.classList.remove("flipped")

})