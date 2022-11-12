
async function uploadidea(event){
    event.preventDefault()
        alert('your idea is being submitted!')
let username = document.getElementById("username").value
let domainsstring = document.getElementById("domains").innerText
let idea = document.getElementById("idea").innerText
        let data = {domains,idea,username}
        console.log("sending this to the backend : " + data);

let resp = await fetch ("/api/uploadidea",{method : "POST" , headers :{
    "Content-Type" : "application/json"
},
body : JSON.stringify(data)})

console.log("recieved response of " + await resp.body );


window.location.href="index.html"

      }