function solve(n){
    
    for(let i =0; i<n; i++){
        var selection = "[data-cellnumber=" + '"' + (i+1).toString() + '"' + "]";
        console.log(document.querySelector(selection));
        document.querySelector(selection).click();
    }
}

function Solve(N){
    for(let j = 0; j<N; j++){
        solve(j+4);
        document.getElementsByClassName("css-de05nr e19owgy710").item(0).click();
    }
}

Solve(100)


<button class="css-de05nr e19owgy710">Continue</button>

<div data-cellnumber="4" class="css-19b5rdt"><div>4</div></div>