
var maxItemsPerClass = 50;
var maxContent = 150;
var content = 0;
var imgs = ["cars", "anime", "programming", "wallpapers"];
var imgContainers = document.getElementsByClassName("content");
let counter = [];
let i = 0;
while (i != 4) {
    addContent();
    i++;
}

function addContent(){
    if(content == maxContent)return;
    for (let j = 0; j < 5; j++) {
        var topic = imgs[Math.floor(Math.random() * 2)];
        var index = Math.floor(Math.random() * 40);
        if(counter.includes(index)) {
            j--;
            continue; 
        }
        content++;
        counter[i] = index;
        imgContainers[j].innerHTML += 
        `<div class="imgContentContainer">
            <div class="saveButton">Save</div>
            <img class="${topic}" src="src/imgs/${topic}/${topic} (${index}).jfif">
        </div>`;
    }   
}

