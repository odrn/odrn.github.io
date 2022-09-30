function getInstruction(){
    
    if(text == "Click!"){
        document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).click();
        document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).click();
    }
    else{
        window.setTimeout(checkFlag, 5);
    }
}


function checkFlag() {
    var text = document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).children.item(0).children.item(1).textContent;
    if(text != "Click!") {
       window.setTimeout(checkFlag, 5); 
    } else {
        document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).click();
        document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).click();
    }
}

checkFlag();


function wait() {
    var text = document.getElementsByClassName("css-1qvtbrk e19owgy78").item(0).children.item(0).children.item(1).textContent;
    if (text != "Click!") {
      setTimeout(wait, 100);
    } else {
      console.log("test");
    }
  }


  <div class=" css-lxtdud eut2yre1" style="width: 132px; height: 132px; border-width: 8.25px; border-radius: 16.5px;"></div>