let no = document.querySelector(".noBtn");
let yes = document.querySelector(".yesBtn");

let x;
let y;

no.addEventListener('click',()=>{
     x = Math.random()*100;
     y = Math.random()*100;
    no.style.right = x + "px";
    no.style.bottom = x + "px";
    no.style.left = y + "px";
})

yes.addEventListener('click',()=>{
    let please = document.querySelector('.middleimg');
    let title = document.querySelector('.title');
    please.src = 'thanks.gif';
        title.innerHTML = 'Thanks💖✨' ;
})
