/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let form = document.querySelector("#form")

form.addEventListener("submit", main)

// let userInfo = JSON.parse(localStorage.getItem("user")) ||

function main(e) {
    let image = form.image.value
    let name = form.name.value
    let email = form.email.value
    let country = form.country.value

    let obj = {
        name,
        image,
        email,
        country
    }

    // userInfo.push(obj)

    localStorage.setItem("user", JSON.stringify(obj))

}
