const btn = document.querySelector('.btn');
const globalContainer = document.querySelector('.global-container');
console.log(btn);
btn.addEventListener('click',()=>{
    globalContainer.classList.toggle('open');
});

btn.addEventListener('onTouchEvent',()=>{
    globalContainer.classList.toggle('open');
});