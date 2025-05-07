class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        const img = document.createElement('img')
        img.src = this.imgUrl
        this.html = img 
        this.render()
        document.body.style.backgroundColor = 'black'
    }
    
    render() {
        document.body.appendChild(this.html)
        this.html.style.position = 'fixed'
        this.html.style.top = this.top + 'px'
        this.html.style.top = this.left +'px'
        this.html.style.width = this.width + 'px' 
        this.html.style.zIndex = 1 
    }
  
    moveUp() {
        this.top -= 20  
        this.render()
    }
    moveDown() {
        this.top += 20 
        this.render()
    }
    moveLeft() {
        this.left -= 20 
        this.render()  
    }
    moveRight() {
        this.right += 20
        this.render() 
    }
  }
  
const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);
      
mfLogotip.init();
    
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();


  class Circle {
    constructor(size, color) {
        this.size = size
        this.color = color
    }

    render() {
        const div = document.createElement('div')
        div.style.width = this.size + 'px'
        div.style.height = this.size + 'px'
        div.style.position = 'fixed'
        div.style.left = '0px'
        div.style.right = '0px'
        div.style.backgroundColor = this.color
        div.style.borderRadius = '50%'
        document.body.appendChild(div)
    }
}

const circle1 = new Circle(50, 'yellow')
circle1.render()

