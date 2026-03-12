function signup(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,password)
.then((cred)=>{

let uid=cred.user.uid

db.collection("users").doc(uid).set({

name:name,
email:email,
rating:0,
orders:0,
skills:[],
verified:false

})

alert("Account created")
window.location="dashboard.html"

})
}

function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

auth.signInWithEmailAndPassword(email,password)
.then(()=>{

window.location="dashboard.html"

})
}