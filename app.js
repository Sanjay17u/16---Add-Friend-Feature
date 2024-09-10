const addButton = document.querySelector('.card__button__add')
const isStatus = document.querySelector('h5')
var check = 0


addButton.addEventListener('click', ()=>{
    if(check == 0) {
        isStatus.innerHTML = 'Friends'
        addButton.innerHTML = 'Remove Friend'
        addButton.style.color = 'rgb(33, 32, 32)'
        addButton.style.backgroundColor = '#a1aec0'
        isStatus.style.color = 'Green'
        check = 1
    } else {
        isStatus.innerHTML = 'Stranger'
        addButton.innerHTML = 'Add Friend'
        addButton.style.color = 'white'
        addButton.style.backgroundColor = '#1877F2'
        isStatus.style.color = 'Red'
        check = 0
    }
})