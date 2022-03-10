var ham = document.querySelector('.icon');
var nav= document.querySelector('.navigation');


ham.addEventListener('click',()=>
{
    nav.classList.toggle('open');
})

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



