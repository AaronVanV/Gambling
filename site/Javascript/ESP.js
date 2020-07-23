window.onload = function(){ 
    let buttons = document.getElementsByClassName('button')
    var orderDealer="";
    var orderComputer="";
    var orderPlayer="";
    let checkComputer=0;
    let checkPlayer=0;
    var array= ["A", "B", "C","D","E"]

    function RandomNumberGenerator(){
        random = Math.floor((Math.random() * 5));
    }
    function DealerCards (){
        orderDealer="";
        while(orderDealer.length!=5){
            RandomNumberGenerator();
            if(!orderDealer.includes(array[random])){
                orderDealer+=array[random]
            }    
        }
    }

    function ComputerCards(){
        orderComputer="";
        while(orderComputer.length!=5){
            RandomNumberGenerator();
            if(!orderComputer.includes(array[random])){
                orderComputer+=array[random]
            }    
        }
    }

    function PlayerCards(){
       orderPlayer= document.getElementById("orderPlayer").value;

    }

    function CheckComputer(){
        checkComputer=0;
        for(i=0;i<orderDealer.length;i++){
            if(orderDealer[i]==orderComputer[i]){
                checkComputer++;
            }

        }
    }

    function CheckPlayer(){
        checkPlayer=0;
        for(i=0;i<orderDealer.length;i++){
            if(orderDealer[i]==orderPlayer[i]){
                checkPlayer++;
            }

        }
    }

    document.getElementById('DealButton').onclick= () => {
        DealerCards();
        ComputerCards();
        PlayerCards();
        CheckComputer();
        CheckPlayer();
        document.getElementById('orderDealer').innerHTML =orderDealer;
        document.getElementById('orderComputer').innerHTML =orderComputer;
        document.getElementById('resultComputer').innerHTML =checkComputer;
        document.getElementById('resultPlayer').innerHTML =checkPlayer;
        
    }

}