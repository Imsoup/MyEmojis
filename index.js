const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const arrayActions = ["push", "unshift", "pop", "shift"] 

function renderEmojis(emojis) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < emojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis(myEmojis)

function modifyEmojis(arrayActions){
    switch (arrayActions){
        case "push":
            if (emojiInput.value) {
                myEmojis.push(emojiInput.value)
                emojiInput.value = ""
                renderEmojis(myEmojis)
            }
            break;
        case "unshift":
            if (emojiInput.value) {
                myEmojis.unshift(emojiInput.value)
                emojiInput.value = ""
                renderEmojis(myEmojis)
            }
            break;
        case "pop": 
            myEmojis.pop()
            renderEmojis(myEmojis)
            break;
        case "shift":
            myEmojis.shift()
            renderEmojis(myEmojis)
            break;  
    }

}

pushBtn.addEventListener("click", function(){
    modifyEmojis("push") 
})

unshiftBtn.addEventListener("click", function(){
    modifyEmojis("unshift")
})

popBtn.addEventListener("click", function() {
    modifyEmojis("pop" )
})

shiftBtn.addEventListener("click", function() {
    modifyEmojis("shift")
})
