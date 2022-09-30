function getWord(){
    if(document.getElementsByClassName("word").item(0) == null){
        console.log("null");
        return;}
    return document.getElementsByClassName("word").item(0).textContent;
}

function clickSeen(){
    var button = document.getElementsByClassName("css-de05nr e19owgy710").item(0);
    button.click();
}

function clickNew(){
    var button = document.getElementsByClassName("css-de05nr e19owgy710").item(1);
    button.click();
}

const seen = [];

for(let i = 0; i<1000; i++){
    currentWord = getWord();
    if(seen.includes(currentWord)){
        clickSeen();
    }
    else{
        clickNew();
        seen.push(currentWord);
    }
}

