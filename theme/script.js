

let btn=document.querySelector("button")
let body=document.querySelector("body")


// THEME IS STORE IN LOCALSTORAGE 
let savedTheme=localStorage.getItem("theme")




if(savedTheme=="dark"){
    body.classList.add("light")
    btn.textContent="Dark"
}
else{
    body.classList.add("dark")
    btn.textContent="Light"
}



btn.addEventListener("click",()=>{
    if(body.classList.contains("dark")){
        body.classList.replace("dark","light")
        btn.textContent="Dark"

        localStorage.setItem("theme","dark")
    }
    else{
        body.classList.replace("light","dark")
        btn.textContent="Light"

        localStorage.setItem("theme","light")
    }
})


console.log(savedTheme)
