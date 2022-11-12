import "mongoose"

mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")

mongoose.connection.once("open" ,()=>{
  console.log("connected!");
  startserver()
}).on("error",()=>{
  console.log("database error");
})


async function uploadidea(){
        alert('your idea is submitted!')
let username = document.getElementById("username").value
let domainsstring = document.getElementById("domains").innerText
let idea = document.getElementById("idea").innerText
        let data = {domains,idea,username}
        console.log(data);


   domainsstring = domainsstring.split(" ")

domainsstring.forEach(async element => {
  
  await mongoose.connection.collection("ideas").insertOne({ "domain" : element , "idea" : data.idea } )
});

window.location.href="home"

      }