let user = JSON.parse(localStorage.getItem("user"))

let image = user.image
let uName = user.name
let email = user.email
let country = user.country

document.querySelector("#name").innerText = uName
document.querySelector("#email").innerText = email
document.querySelector("#country").innerText = country
document.querySelector("#image").setAttribute("src", image)

let news = JSON.parse(localStorage.getItem("currentNews"))

append(news)

function append(e) {
    let container = document.querySelector("#show_news")
        let image = document.createElement("img")
        image.setAttribute("src", e.urlToImage)
        let title = document.createElement("h3")
        title.innerText = e.title
        let desc = document.createElement("h4")
        desc.innerText = e.description
        container.append(image, title, desc)
}

