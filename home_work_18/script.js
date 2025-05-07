
const nameUser = document.getElementById('nameUser')
const userName = document.getElementById('userName')
const adress = document.getElementById('adress')
const company = document.getElementById('company')
const cardUsers = document.getElementById('cardUsers')
const list = document.getElementById('list')

async function fetchUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        if(data?.length > 0){
            for(let i = 0; i < data.length; i++){
                const user = data[i]
                
                const liTag = document.createElement('a')
                liTag.innerText = `${user.name}`
                liTag.className = 'user-element list-group-item list-group-item-action'
                if(i === 0){
                    liTag.classList.add('active')
                    const card = `            
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p id="userName" class="card-text">${user.username}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li id="adress" class="list-group-item">Street: ${user.address.street} Suite: ${user.address.suite} City: ${user.address.city} Zipcode ${user.address.zipcode}</li>
                            <li id="company" class="list-group-item">${user.company.name}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Написать ему</a>
                        </div>`
                       
                    cardUsers.innerHTML = card
                }

                liTag.addEventListener('click', () =>{
                    const userTag = document.querySelectorAll('.user-element')
                    userTag.forEach(userTag => {
                        userTag.classList.remove('active')
                    })
                    liTag.classList.add('active')
                    const card = `            
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p id="userName" class="card-text">${user.username}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id="adress" class="list-group-item">Street: ${user.address.street} Suite: ${user.address.suite} City: ${user.address.city} Zipcode ${user.address.zipcode}</li>
                        <li id="company" class="list-group-item">${user.company.name}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Написать ему</a>
                    </div>`
                   
                cardUsers.innerHTML = card
                     
                })
                
                list.appendChild(liTag)

                
            }            
        }       
    }
    catch(error){
        alert(error)
    }
}
fetchUsers()