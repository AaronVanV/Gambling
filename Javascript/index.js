window.onload = function(){ 
    let buttons = document.getElementsByClassName('button')
    let game=0;
    let random=0;

    var array= ["ESP", "Indian Poker", "Memory","Choice Poker","Old Maiden","Nim Type Zero","Soixante Trois"]

    function RandomNumberGenerator(){
        random = Math.floor((Math.random() * array.length));
    }

    function GetGame(){
        game= array[random];
    }

    

    function duplicate() {
        var firstDiv = document.getElementById(game);
        var secondDiv = document.getElementById('outputdiv');
        secondDiv.innerHTML = firstDiv.innerHTML;
    }

    document.getElementById('RandomButton').onclick= () => {
        RandomNumberGenerator();
        GetGame();
        duplicate();
        document.getElementById("outputdiv").style.borderColor = "Red";
        
    
    }
}