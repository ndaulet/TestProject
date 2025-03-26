const inputTag = document.getElementById('inputTag')
const addBtn = document.getElementById('addBtn')
const liTemplate = document.getElementById('liTemplate')
const ul = document.getElementById('ul')

addBtn.addEventListener('click', () => {
    if(inputTag.value === ''){
        alert('Please, fill task name')
        return
    }
    const newTagClone = liTemplate.content.cloneNode(true) 
    const newTag = newTagClone.getElementById('liTag')  
    const taskLabel = newTagClone.getElementById('taskLabel')
    const deleteBtn = newTagClone.getElementById('deleteBtn')
    taskLabel.innerText = inputTag.value
    inputTag.value = ''
    const firstCheckbox = newTagClone.getElementById('firstCheckbox')
    firstCheckbox.addEventListener('click', () => {
        newTag.classList.toggle('list-group-item-success')

    })
    ul.appendChild(newTag)
    deleteBtn.addEventListener('click', () => {
        newTag.remove()
    })
})