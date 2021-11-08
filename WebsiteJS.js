$(".Googlelink").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

//every 3 sec, call the function "Togg" 
var myVar = setInterval(Toggle, 5600);


//get the second image to disapear from the get-go
document.getElementsByClassName('Part3')[0].style.display = "none";
//get the corrosponding 'buttons' to match the right colors
document.getElementById("rightbutton").style.color = '#ff303f';
document.getElementById("leftbutton").style.color = 'grey';



function Toggle() {
    var x = document.getElementsByClassName('Part1')[0];
    var y = document.getElementsByClassName('Part3')[0];
    console.log(y);
    if (y.style.display == "none") {

        document.getElementById("leftbutton").style.color = '#ff303f';
        document.getElementById("rightbutton").style.color = 'grey';
        //if the second image is invisible, fade it in again
        $(".Part1").fadeOut("slow");
        //WAIT for the first image to fade out before fading in the second image
        setTimeout(function () {
            $(".Part3").fadeIn("slow");
        }, 500);

        //make the first image invisible 
    } else {
        document.getElementById("rightbutton").style.color = '#ff303f';
        document.getElementById("leftbutton").style.color = 'grey';
        //if the second image is invisible, fade it in again
        $(".Part3").fadeOut("slow");
        //WAIT for the second image to fade out again before fading it back in 
        //NOTE: make sure to eliminate any 'transition-duration' times in the css or it will not work
        setTimeout(function () {
            $(".Part1").fadeIn("slow");
        }, 500);
    }
}


function Whiteicon(var1) {
    var z = document.getElementsByClassName('buttoniconsfloat')[var1];
    z.style.opacity = "1";
}

function Pink(var1) {
    var z = document.getElementsByClassName('buttoniconsfloat')[var1];
    z.style.opacity = "0.0";
    console.log(z);
}

function Whiteicon1(var1) {
    var z = document.getElementsByClassName('Sociconshidden')[var1];
    z.style.opacity = "1";
    console.log(z);
}

function Pink1(var1) {
    var z = document.getElementsByClassName('Sociconshidden')[var1];
    z.style.opacity = "0.0";
    console.log(z);
}
/*

    document.getElementById("Slideimg2").style.display = "none";
    document.getElementById("Caption2").style.display = "none";
 
        var x = document.getElementById("Slideimg1");
        var y = document.getElementById("Slideimg2");

document.getElementById("stopbutton").addEventListener("click", function(){
        clearInterval(myVar);
        document.getElementById('txt').style.color = 'red';
        var blink_speed = 500; // every 1000 == 1 second, adjust to suit
        var t = setInterval(Blink, blink_speed);
});*/
