function chiffreCache(){
    var r= Math.floor(Math.random() * 10);
    var diff = prompt("Saisir la difficulter (easy,medium,hard)");

    if (diff == "easy") 
        tries = 5;
    else if (diff == "medium"){
        tries = 3;
    }
    else if (diff == "hard"){
        tries = 1;
    }
    
    while(tries>0){
        tries --;
        var input = prompt("Enter un chiffre:");
        if(input == r){
            alert("You Won");
            tries =0;
        }
        else {
            alert("try again");
        }
        
    }
    var playAgain=prompt("play again?");
    if(playAgain == "yes"){
        chiffreCache();
    }
}

chiffreCache();