var coul = document.getElementById("couleur");
var sz = document.getElementById("size");
var pol = document.getElementById("police");

coul.addEventListener("change", function(){
        document.getElementById("para").style.color= coul.value;
})

sz.addEventListener("change", function(){
    document.getElementById("para").style.fontSize = sz.value + "px";
})

pol.addEventListener("change", function(){
    var result=pol.options[pol.selectedIndex].text;
    document.getElementById("para").style.fontFamily = result;
})