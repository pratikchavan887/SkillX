function hire(talentId){

let user=auth.currentUser

db.collection("orders").add({

client:user.uid,
talent:talentId,
status:"pending",
date:new Date()

})

alert("Hire request sent")

}

function completeOrder(orderId,rating){

db.collection("orders").doc(orderId).update({

status:"completed",
rating:rating

})

}