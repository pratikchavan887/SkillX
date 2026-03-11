function addSkill(){

let skill=document.getElementById("skillName").value
let price=document.getElementById("skillPrice").value

let user=auth.currentUser

db.collection("users").doc(user.uid).update({

skills:firebase.firestore.FieldValue.arrayUnion({
skill:skill,
price:price
})

})

alert("Skill Added")

}