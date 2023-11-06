let textarea = document.querySelector('#textarea')
let send_comments = document.querySelector('#send_comments')

// local storage
let name_local = localStorage.getItem('name')
let data = localStorage.getItem('msgList')
let text = localStorage.getItem('text')

let msgList = []
if (data !== "" && data !== null){
    msgList = JSON.parse(data)
}

function createMsg(obj){
    const itemMsg = document.createElement('li')
    itemMsg.classList.add('list-group-item')

    const itemName = document.createElement('p')
    itemName.classList.add('lead')
    itemName.textContent = "Name: " + name_local

    const itemText = document.createElement('p')
    itemText.classList.add('lead')
    itemText.textContent = "Message: " + obj.text

    const line = document.createElement('hr')
    // line.classList.add('lines')
    // itemMsg.append(itemName)
    // itemMsg.append(line)

    itemMsg.append(itemText)

    document.getElementById('msg-list').append(itemMsg)

}

for (const msg of msgList) {
    createMsg(msg)
}


let msgObj = {
    name_local: name_local,
    text:text
  }
  createMsg(msgObj)
msgList.push(msgObj)


send_comments.onclick = function (){
   
}

$(send_comments).on("click", function (){
    if (textarea.value.length != 0){
        localStorage.setItem('text', textarea.value)
    }
    
    localStorage.setItem('msgList', JSON.stringify(msgList))
      
    window.location.reload()

})

if (text == null){

    let id = null;
const elem = document.getElementById("animate");   
elem.setAttribute('style', 'display: flex')
let pos = 70;
clearInterval(id);
id = setInterval(frame, 5);
function frame() {
if (pos == 77) {
clearInterval(id);
} else {
pos++; 
elem.style.left = pos + "%"; 
}
}

}

