






function typeSearch(){
    var types = document.getElementById("types").value;
    var states = document.getElementById("states").value;
    var soils = document.getElementById("soils").value;
    var sug = document.getElementById("sug");
    var prac = document.getElementById("prac");
    
    if(states != "select" && soils != "select" && types != "select"){
        sug.textContent = "rice";
        prac.textContent = "water";
    }
    else{
        sug.textContent = "Select all the options.";
    }
    
}
