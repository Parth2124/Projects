let y = 1
let z = 0

// document.getElementById('restart').innerHTML = false;
document.getElementById('restart').disabled = true;
document.getElementById('restart').disabled = true;
// document.getElementById('restart').className = 'mt-5';
function roll_dice(){
    var audio = new Audio('roll_dice.mp3');
    audio.play();
    
    let x = Math.floor(Math.random(0,1)*6+1)
    console.log(x)
    document.getElementById('dice_value').innerHTML = x
    

    if(x===1){
        document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhgQqJXpvXe_YwmYM8iSfaBeaD9STaV3I-w&s';
    }if(x===2){
        document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69PKQkv4JWIXJa1AfYVK9vUf_cXnLd-Pu-BUSRbXy5DcUg4p6015-6PMsHmGVWZ6TM-A&usqp=CAU';
    }if(x===3){
        document.getElementById('image').src = 'https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-3-Showing.png';
    }if(x===4){
        document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSWHpGNLGdn3OymOrLvSmLnLsmWU-7LRXVQ&s';
    }if(x===5){
        document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKIKsfMxcbLyGLXQkfGh9FRoKkXu7QNu0eA&s';
    }if(x===6){
        document.getElementById('image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu22qtJT--wKBe5ZZ--omqzto2FUNUUJ5a6A&s';
    }
    

    if(y%2===0){
        console.log("salman")
       let num1= Number(document.getElementById('p1_score').innerHTML)
       num1 = num1 + x
       document.getElementById('p1_score').innerHTML = num1
       y = 1
    //    if (x===6) {
    //     roll_dice();
    // }

       if(num1>=50){
           z=1
        }
             
     
    }else{
        console.log("vivek")
        let num2 = Number(document.getElementById('p2_score').innerHTML)
        num2 = num2 + x
        document.getElementById('p2_score').innerHTML = num2
        y = y+1
        
        // if( x===6) {
        //     roll_dice();
        // }

        if(num2 >= 50){
            z=1
        }
    }
   
    if(z===1){
        let num1= Number(document.getElementById('p1_score').innerHTML)
        let num2= Number(document.getElementById('p2_score').innerHTML)

        document.getElementById('image').src = 'https://images.news18.com/ibnlive/uploads/2023/11/aishwarya-rai-abhishek-bachchan-2023-11-e6a8b82262b429c90d45f8ab40544345.jpg';
        
        if(num1>num2){
            document.getElementById('result').innerHTML = 'Salman Khan Won + Aishwarya Loves Salman'
            document.getElementById('result').className = 'alert alert-dark'
            document.getElementById('dice').disabled = true;
            document.getElementById('restart').disabled = false;
            document.getElementById('restart').innerHTML = 'Play Again';
            document.getElementById('restart').className = 'container text-center btn btn-outline-danger mt-3';
            
        }
        if(num2>num1){
            document.getElementById('result').innerHTML = 'Vivek Oberoi Won + Aishwarya Loves Vivek'
            document.getElementById('result').className = 'alert alert-dark'
            document.getElementById('dice').disabled = true;
            document.getElementById('restart').disabled = false;
            document.getElementById('restart').innerHTML = 'Play Again';
            document.getElementById('restart').className = 'container text-center btn btn-outline-danger mt-3';
        }
        addEventListener('click', function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });

    }
}



function restart_it(){
    
    location.reload(true);
}