import data from './module.js'
const container = document.getElementById("app")

class Button {
    constructor(id, label, user){
        this.id = id
        this.label = label
        this.user = user
    }
    onClick(){
        console.log(this.user)  
    }
    render (){        
        const button = document.createElement('button')
        button.id = this.id
        button.innerText = this.label
        button.addEventListener('click', this.onClick.bind(this))
        return button  
    }  
}

data.forEach(i => {
    const btn = new Button(i.id, i.label, i.user)    
    container.appendChild(btn.render())
});

