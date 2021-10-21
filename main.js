const API = "https://api.lyrics.ovh"

const search = document.querySelector(".search")
const form = document.querySelector(".form")
const content = document.querySelector(".content")

form.addEventListener("submit", event =>{
    event.preventDefault()

    const searchTerm = search.value.trim()

    if(!searchTerm) {
        alert("You must type a valid search term")
        return
    }

    searchSongs(searchTerm)
})


async function searchSongs(search) {
    const request = await fetch(`${API}/${search}`)
    const response = await request.json()
    console.l.og(response)
}
