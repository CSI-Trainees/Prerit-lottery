var content;
function myfunc() {
    content=10+10*Math.random();
    content=Math.floor(content);
    document.getElementById("random").innerHTML="!! Your lucky number is: "+content+"!!";
    btn.style.width="35%"
    document.getElementById("btn").style.display="none";
    document.getElementById("random").style.display="inline";
}
function submit() {
    let x;
    x=document.getElementsByName("input");
    console.log(x);
}
let y;
function home() {
    xyz.setAttribute("disabled","disabled");
    document.getElementById("forBG").style.display="inline";
    
}
