let inp=document.getElementById('input');
let button = document.getElementById('btn');
let rem= document.getElementById('remove');
let out = document.getElementById('output');
button.addEventListener('click',function(){
    if(inp.value==""){
        alert('Please enter text')
    }
    let ul=document.createElement("ul");
    ul.innerText=inp.value;
    out.appendChild(ul);
    inp.value="";
    rem.addEventListener('click', function(){
        out.removeChild(ul)
    })




})