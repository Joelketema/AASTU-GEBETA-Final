const cart = document.querySelector('.cart');
const smallPop = document.querySelector('.smallPop')
const close = document.getElementById('delMain');
const credit = document.querySelector('.credit')
const next = document.querySelector('#nextBtn')
const closec = document.querySelector('#closeCredit')

const topPart = document.querySelector('.toppart');



closec.addEventListener('click', () => {
    credit.classList.remove('active')
    next.innerHTML = "Next"
})


var total = 0
var payment = 0
next.addEventListener('click', () => {

    if (next.innerHTML == 'Next') {
        Namee = localStorage.getItem("userName")
    
        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
            data.forEach(d => {
                for (var i = 0, len = localStorage.length; i < len; ++i) {
                    if (d.Name == localStorage.key(i)) {
            
                        for (j = 0; j < topPart.children.length; j++) {
                         
                            if (d.Name == topPart.children[j].childNodes[0].innerHTML) {
                                console.log("inside")
                                payment += (parseInt(d.Price) * parseInt(topPart.childNodes[j].childNodes[1].childNodes[0].childNodes[0].value))
                                total += (parseInt(topPart.childNodes[j].childNodes[1].childNodes[0].childNodes[0].value))
                                console.log(payment)

                                // console.log(`${d.Name} price is ${d.Price} value ${topPart.childNodes[j].childNodes[1].childNodes[0].childNodes[0].value}`)
                            }
                        }
                       
                    }
                }
                document.querySelector('.userNameCredit').innerHTML = `Your UserName: ${Namee}`
                document.querySelector('.amountOFFood').innerHTML = `Ordered Food Amount: ${total}`
                document.querySelector('.totalPrice').innerHTML = `Total Price Amount(Plus Delivery-10%): ${payment + ((15 / 100) * payment)} Birr`
                // for () {
                //     console.log( localStorage.key( i ));
                //   }
            })
        })

 
    
        credit.classList.add('active')
        next.innerHTML = "Order"
    }

    else
    {
        if (document.getElementById('agree').checked) {
            alert("Order Submitted Successfully!")
            modal.classList.remove('active')
            credit.classList.remove('active')
            overlay.classList.remove('open')
            localStorage.removeItem("order")
            toppart.innerHTML = ""
            j = 0
            update()
        }

        else
        {
    
            next.title ="Please Check the Box first"
            }
        }
})

const modal = document.querySelector('.modal');


cart.addEventListener('click',openModal);
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


function openModal()
{
    const modal = document.querySelector('.modal');
    console.log('cart');
    modal.classList.add('active');
    overlay.classList.add('open');
}

function closeModal()
{
 
    next.innerHTML = "Next"
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
    overlay.classList.remove('open');
    smallPop.classList.remove('active')
    document.querySelector('.secondModal').classList.remove('active')

}

/*del inside the modal*/

const delSmall = document.querySelectorAll('#del');



delSmall.forEach(small =>{
    small.addEventListener('click',()=>{
        topPart.style.display = "none"
        restart();
    
    } )

})


/*nav sticky*/

window.addEventListener('scroll',()=>
{
    var top = document.querySelector('.top');
    top.classList.toggle('sticky', window.scrollY > 0);
    var backtotop = document.querySelector('.fa-arrow-alt-circle-up');
    backtotop.classList.toggle('active', window.scrollY>200);
})


/*small popup*/


document.getElementById('smallDel').addEventListener('click',()=>
{
    smallPop.classList.remove('active')
    overlay.classList.remove('open')
    document.querySelector('.secondModal').classList.remove('active')

})

/*small pop up conent*/
var obj = new Array

document.addEventListener('click', (e) => {
    if (e.target.classList == "fas fa-question-circle")
    {
   
        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
            data.forEach(element => {
                
                if (e.target.id == element.Name) {
                    console.log(element.Image)

                    document.querySelector('.foodSelectedImage').src = element.Image
                    document.querySelector('.foodSelectedImage').id=element.Catagory
                    document.querySelector('.foodSelectedTitle').innerHTML = element.Name
                    document.querySelector('.foodSelectedDescribe').innerHTML = element.About
                    document.querySelector('.loungeSelected').innerHTML = element.Lounge
                    x = document.querySelector('#wishList')
                    x.className = element.Name

                    x.addEventListener('click', () => {
                         obj.push(element.Name)
                    localStorage.setItem('wishes', JSON.stringify(obj))
                    })
                   

                }
          });
            })
    
        }
})

/*inside main modal*/
const toppart = document.querySelector('.toppart')
var topNumber = document.querySelector('.topNumber')

document.addEventListener('click', (e) => {
    if (e.target.classList == "fas fa-plus") {
   
        console.log("added")
        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
            data.forEach(d => {
                if (e.target.id == d.Name)
                {
                   
                        makeOrder(d)
    
                    
                    }
            })
            
        })
    }
})
i=0
function checkDiv()
{

  if(i==1)
    {
        toppart.innerHTML = ""
        
        }
    
}
var j =0
checkDiv()

var obj2 = new Array
const makeOrder = (d) => {

    console.log(toppart.children.length)
    if (toppart.children.length < 5) {

        i++
    checkDiv()
    let ordersList = document.createElement('div')
    ordersList.className = "ordersList"

    let orderedMeal = document.createElement('div')
    orderedMeal.className = "orderedMeal"

    let orderedQuantity = document.createElement('div')
    orderedQuantity.className = "orderedQuantity"

    let remove = document.createElement('div')
    remove.className = "removeOrder"

    orderedMeal.innerHTML = d.Name


    let middleNumber = document.createElement('span')
        middleNumber.className = "middleNumber"
        middleNumber.id = d.Name
        middleNumber.innerHTML = "<input class='mnum'  type='number' max='5' min='0' value='1'/>"
        middleNumber.firstElementChild.id =d.Name
    
        let money = document.createElement('span')
        money.className="money"
        money.id = d.Name
        money.innerHTML =`${d.Price} Birr`

    let removeIcon = document.createElement('i')
    removeIcon.classList.add('fas', 'fa-trash-can')

        obj2.push(d.Name)


        
        localStorage.setItem((d.Name).toString(),d.Price.toString())
        localStorage.setItem("order", JSON.stringify(obj2))

        orderedQuantity.appendChild(middleNumber)
        orderedQuantity.appendChild(money)

  

    ordersList.appendChild(orderedMeal)
    ordersList.appendChild(orderedQuantity)
    ordersList.appendChild(removeIcon)


    toppart.appendChild(ordersList)
    i++
    j++
    update()
}

    else
    {
        alert("cart is Full")
        console.log(toppart.children.length)
        }

    
}

const update = () => {
    topNumber.innerHTML = j
}

document.addEventListener('click', (e) => {

    if(e.target.className == "fas fa-trash-can")
    {
        console.log('trash')
     
       
        e.target.closest('.ordersList').remove()
      localStorage.removeItem((e.target.closest('.ordersList').childNodes[0].innerHTML).toString())
        j--
        update()
    }
})
function hideNotify()
{
setTimeout(()=>
{
    const notify = document.querySelector('.notify')
     notify.classList.remove('active')    
},1000)
}


document.addEventListener('click', (e) => {
    if (e.target.classList == "fas fa-question-circle") {
        document.querySelector('.secondModal').classList.add('active')
        smallPop.classList.add('active')
        overlay.classList.add('open')
    }

    else if (e.target.classList == "fas fa-plus") {
        console.log("plus")
        if (toppart.children.length > 0 && toppart.children.length <5)
        {
               const notify = document.querySelector('.notify')
        notify.classList.add('active')
        hideNotify()
            }
     
    }
})

function checking()
{
    if (toppart.innerHTML == "" || toppart.children[0].classList=="holder")
    {
        credit.classList.remove('active')
     
        next.innerHTML = "Next"
        next.title ="Cart is Empty!"
    }

    else
    {
        next.style.cursor = "pointer"
        next.title=""

        }
}

checking()
/*the add button*/

const addBtn = document.querySelector('.btnModal')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (toppart.innerHTML == "" || toppart.children[0].classList=="holder")
    {
        credit.classList.remove('active')
        next.style.cursor="not-allowed"
        next.innerHTML = "Next"
        next.title = "Cart is Empty!"
        checking()
    }

    else
    {
        next.style.cursor = "pointer"
        next.title=""

        }

})

document.addEventListener('click', (e) => {
    fetch("./assets/js/data.json").then(response => response.json()).then(data => {
        data.forEach(d => {
         
            if (e.target.classList == "mnum")
            {
                moneys = document.querySelectorAll('.money')
                moneys.forEach(m => {
                    
            
                        if (m.id == e.target.id)
                        {
                            if (m.id == d.Name)
                            {
                                m.innerHTML = `${parseInt(d.Price) * parseInt(e.target.value) } Birr`
                                }
                            }
                   
                 
               }) 
                
            }
            
        })
        
    })

})


//picking

const delivery = document.querySelector('.Delivery')
const fillData = document.querySelector('.fillData')
const lounge = document.querySelector('.lounge')
const pickTime = document.querySelector('.pickTime')

delivery.addEventListener('click', () => {
    fillData.classList.add("active")
    pickTime.classList.remove("active")
})


lounge.addEventListener("click", () => {
    fillData.classList.remove("active")
    pickTime.classList.add("active")
})
