// AIzaSyDfO3BE5P8dXNjKlMosrtShQgJQdfAjlOg
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const mainVideoContainer = document.getElementById('mainVideoContainer')
const otherVideoContainer = document.getElementById('otherVideoContainer')

searchBtn.addEventListener('click', () => {
    const searchText = searchInput.value
    fetchVideos(searchText)

})
async function fetchVideos(searchText) {
    try{
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDfO3BE5P8dXNjKlMosrtShQgJQdfAjlOg&q=${searchText}&type=video`)
        const data = await response.json()
        if(data?.items?.length > 0){
            const videos = data.items
            mainVideoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[0].id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
            otherVideoContainer.innerHTML = ''

            videos.forEach(video => {
                const img = document.createElement('img')
                img.src = video.snippet.thumbnails.high.url
                img.addEventListener('click', () => {
                    mainVideoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`
                })
                otherVideoContainer.appendChild(img)
                

            });
            searchInput.value= ''
        }
        
    }
    catch{
        alert('error')
    }
    
}