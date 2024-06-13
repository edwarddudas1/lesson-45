const openModal = document.querySelector(".open-button");
const modal = document.querySelector(".backdrop js-backdrop");
const closeModal = document.querySelector(".close-button");
openModal.addEventListener('click', function(){
    modal.classList.add('active');
})
closeModal.addEventListener('click', function(){
    modal.classList.remove('active');
})