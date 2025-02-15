function openModal(image){
    let Modal=document.getElementById('modal')
    let Modal_image=document.getElementById('modal-image')
    
    Modal.style.display="flex"
    Modal_image.src=image.src
}
function closeModal(){
    let Modal=document.getElementById('modal')
    Modal.style.display="none"
}