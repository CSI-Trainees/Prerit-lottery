function myfunc() {
    let content;
    content=10+10*Math.random();
    content=Math.floor(content);
    document.getElementById("h1").innerHTML="You have got: "+content;
    btn.style.width="30%"
    btn.setAttribute("disabled","disabled");
}
function submit() {
    let x;
   x=document.getElementsByName("input");
   console.log(x);
}

