/*nav sticky*/

window.addEventListener('scroll',()=>
{
    var top = document.querySelector('.top');
    top.classList.toggle('sticky', window.scrollY > 0);
    var backtotop = document.querySelector('.fa-arrow-alt-circle-up');
    backtotop.classList.toggle('active', window.scrollY>200);

   const titles = document.querySelectorAll('.featureTitle');
   const sections = document.querySelectorAll('.sectionOne');

    titles.forEach(title=>{
        title.classList.add('appear', window.scrollY > 200);
    })

    sections.forEach(section=>{
        section.classList.add('appear', window.scrollY > 200);
    })
})

const loader = document.querySelector('.loading')



// setTimeout(() => {
//   loader.classList.add('active')
// }, 2000)





/*const drops = document.querySelectorAll('.fa-angle-right');

drops.forEach(drop=>{
    drop.addEventListener('click', ()=>{
        drop.classList.add('change');
    })
})
*/

/*window.addEventListener('load', ()=>{
    setTimeout(()=>{
        image = document.createElement('img');
        image.src ="../../Resources/images/loader2.gif"
        document.appendChild(image);
    }, 2000)
})*/
