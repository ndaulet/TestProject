// *** Задание 1
const fetchPost = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.org/users')
        const data = await response.json()
        for (const element in ul) {
            element.innerHTML += `<li>${data.firstname}</li>`
        }
    }
    catch(error){
        console.error(error)
    }
}
fetchPost()


