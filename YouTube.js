
function dropdown(){
    if(document.getElementById("menu").style.display == "block"){
        document.getElementById("menu").style.display = "none";
    }
    else
    {
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").style.transitionDelay = "0.6";
    }
}


function search(){
    if(document.getElementById("search").style.display == "block"){
        document.getElementById("search").style.display = "none";
    }
    else
    {
        document.getElementById("search").style.display = "block";
    }
}