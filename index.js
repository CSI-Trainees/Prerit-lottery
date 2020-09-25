var content;
function myfunc() {
    content=10+10*Math.random();
    content=Math.floor(content);
    document.getElementById("random").innerHTML="!! Your lucky number is: "+content+"!!";
    btn.style.width="35%"
    document.getElementById("btn").style.display="none";
    document.getElementById("random").style.display="inline";
}

function result() {
    
    if (content==11 || content==15 || content==18) 
    {
        document.getElementById("result").innerHTML="!! YOU WIN !!"       
    }
    else{
     
        document.getElementById("result").innerHTML="!! BETTER LUCK NEXT TIME !!";  
    }
 
 }
