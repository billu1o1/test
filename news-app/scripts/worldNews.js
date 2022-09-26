const getNews = async (country) => {
    let news = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${country}`)
    news = await news.json()
    let { articles } = news
    console.log(articles)
    append(articles)
}

const getNewsBySearch = async (query) => {
    let news = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`)
    news = await news.json()
    let { articles } = news
    console.log(articles)
    append(articles)
}

function append(news) {
    let container = document.querySelector("#news_container")
    container.innerHTML = ""

    news.forEach(function (e) {
        let div = document.createElement("div")
        div.setAttribute("class", "news")
        div.addEventListener("click", function () {
            detailedNews(e)
        })
        let left = document.createElement("div")
        left.setAttribute("class", "left")
        let right = document.createElement("div")
        right.setAttribute("class", "right")
        let image = document.createElement("img")
        image.setAttribute("src", e.urlToImage)
        let title = document.createElement("h3")
        title.innerText = e.title
        let author = document.createElement("p")
        author.innerText = e.author
        left.append(image)
        right.append(title, author)
        div.append(left, right)
        container.append(div)
    })
}

let input = document.querySelector("#search")

input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        getNewsBySearch(input.value)
    }
})

function detailedNews(e) {
    localStorage.setItem("currentNews", JSON.stringify(e))
    window.location = "./news.html"
}

function india() {
    let code = "in"
    getNews(code)
}

function us() {
    let code = "us"
    getNews(code)
}

function china() {
    let code = "ch"
    getNews(code)
}

function uk() {
    let code = "uk"
    getNews(code)
}

function newZealand() {
    let code = "nz"
    getNews(code)
}

let user = JSON.parse(localStorage.getItem("user"))

let image = user.image
let uName = user.name
let email = user.email
let country = user.country

window.onload = getNews(country)

document.querySelector("#name").innerText = uName
document.querySelector("#email").innerText = email
document.querySelector("#country").innerText = country
document.querySelector("#image").setAttribute("src", image)



