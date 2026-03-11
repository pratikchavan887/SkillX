function signup(){

let name=document.getElementById("s-name").value
let email=document.getElementById("s-email").value
let password=document.getElementById("s-pass").value

auth.createUserWithEmailAndPassword(email,password)
.then((userCredential)=>{

let uid=userCredential.user.uid

db.collection("users").doc(uid).set({
name:name,
email:email,
skills:[],
rating:0,
orders:0
})

alert("Account created")

})
.catch(error=>{
alert(error.message)
})

}



function login(){

let email=document.getElementById("l-email").value
let password=document.getElementById("l-pass").value

auth.signInWithEmailAndPassword(email,password)
.then(()=>{
alert("Login successful")
})
.catch(error=>{
alert(error.message)
})

}