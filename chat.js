function sendMessage(orderId){

let msg=document.getElementById("msg").value

db.collection("messages").add({

order:orderId,
text:msg,
time:new Date(),
sender:auth.currentUser.uid

})

}