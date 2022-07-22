
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modalContainer = document.querySelector(".modal-container");

openModal.addEventListener("click",()=>{
  modalContainer.classList.add("show-modal");
 document.body.classList.add('article') ;
});

closeModal.addEventListener("click",() => {
  modalContainer.classList.remove("show-modal");
  document.body.classList.remove('article');
});





