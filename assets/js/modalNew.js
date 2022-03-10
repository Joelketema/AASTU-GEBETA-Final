const pictures= document.querySelectorAll(".pictures")
const small = document.querySelector('.smallPop')
pictures.forEach((P)=>{
    P.addEventListener('click',()=>{
        console.log('p')
        small.classList.add('active')
    })
})