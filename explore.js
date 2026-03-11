function loadTalent(){

let grid=document.getElementById("talent-grid")

grid.innerHTML=""

db.collection("users").get()

.then(snapshot=>{

snapshot.forEach(doc=>{

let data=doc.data()

data.skills.forEach(s=>{

grid.innerHTML+=`

<div class="t-card">

<h3>${data.name}</h3>

<p>${s.skill}</p>

<p>₹${s.price}</p>

<button>Hire</button>

</div>

`

})

})

})

}

loadTalent()