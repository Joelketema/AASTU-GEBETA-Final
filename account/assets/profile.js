const ProfileInformation=[{

    Email:'Ermias@gmail.com',
    Phone:09171988,
    image:"../Resources/images/avatar.png",
},]

const profiles = {
    boy: "./Resources/images/Boy.png",
    girl:"./Resources/images/Girl.png"
}

const profileHeader = document.querySelector('.information')
const info = document.querySelector('.info')

function createProfile()
{
    ProfileInformation.forEach((pf)=>{
    
        var profileImage = document.createElement('img')
        profileImage.src = pf.image
        profileImage.style.width = "150px"
        console.log(pf.image)
        var input = document.createElement('input')
        input.type = "file"
        input.accept = "image/*"
        
        input.addEventListener('change', () => {
            console.log(input.files[0].name)
            console.log(profiles.boy)
            if(input.files[0].name == "Boy.png") profileImage.src= profiles.boy
            else if (input.files[0].name == "Girl.png") profileImage.src = profiles.girl
            else profileImage.src =pf.image
            
        })
             
       
        ProfileInformation.image = input.src

        var header = document.createElement('h3')
        header.innerHTML =localStorage.getItem("userName")

        
        var mail = document.createElement('h3')
        mail.innerHTML =localStorage.getItem("Email")
        mail.className="email"

        info.appendChild(header)
        info.appendChild(mail)

        profileHeader.appendChild(profileImage)  
        profileHeader.appendChild(input)
        profileHeader.appendChild(info)
    })



}

createProfile()

//info

const h4s = document.querySelectorAll('.h4')
const main = document.querySelector('.main')
const menu = document.querySelector('.menu')

function toggleFun()
{
    profileHeader.classList.add('mini')
    main.classList.add('active')
    menu.classList.add('allign')
}

    document.addEventListener('click',(e)=>{
        if(e.target.classList=="mainMenu")
        {
            profileHeader.classList.remove('mini')
            main.classList.remove('active')
            menu.classList.remove('allign')
        }
    })

function createInfo()
{
    h4s.forEach((h4)=>{
        h4.addEventListener('click',(e)=>{
            if(h4.id =="info")
            {
                if(e.target.classList == "active")
                {
                     makeAbout()
                }
                else{
                    toggleFun()
                    makeAbout()
                }
                console.log('info')
               
            }
           else if(h4.id =="wish")
            {
                if(e.target.classList == "active")
                {
                     makeWish()
                }
                else{
                    toggleFun()
                    makeWish()
                }
                console.log('wish')
            }
          else if(h4.id =="orders")
            {
                if(e.target.classList == "active")
                {
                     orders()
                }
                else{
                    toggleFun()
                    orders()
                }
                console.log('orders')
            }
          else if(h4.id =="setting")
            {
                if(e.target.classList == "active")
                {
                     setting()
                }
                else{
                    toggleFun()
                    setting()
                }
                console.log('setting')
            }
          else if(h4.id =="contact")
            {
                if(e.target.classList == "active")
                {
                     contactUs()
                }
                else{
                    toggleFun()
                    contactUs()
                }
                console.log('contact')
            }

        })
    })
}

createInfo()

function makeAbout()
{
    ProfileInformation.forEach((pf)=>{
    
        main.innerHTML = ""
        var profileImage = document.createElement('img')
        profileImage.src = pf.image

  
        var blockNumber = document.createElement('h5')
        blockNumber.innerHTML= "Your Block Number " + pf.Block

        var roomNumber = document.createElement('h5')
        roomNumber.innerHTML ="Your Dormitary Room Number " + pf.Room

        
    
        main.appendChild(profileImage)
       

        main.appendChild(blockNumber)
        main.appendChild(roomNumber)
    })
}

function makeWish()
{
    var wishes = JSON.parse(localStorage.getItem("wishes"))
    main.innerHTML = ""
    var title = document.createElement('h5')
    title.innerHTML = "Wish List "
    title.className= "mainTitle"

    main.appendChild(title)
    
    for (i = 0; i < wishes.length; i++) {
        var food = document.createElement('h5')
        food.className="wishItems"
        food.innerHTML = wishes[i]

        
        main.appendChild(food)
    }
}

function orders()
{

 var orders = JSON.parse(localStorage.getItem("order"))
    main.innerHTML = ""
    var title = document.createElement('h5')
    title.className= "mainTitle"
    title.innerHTML = "Your Pending Orders"
    main.appendChild(title)
    
    i
    for (i = 0; i < orders.length; i++) {
        var food = document.createElement('h5')
        food.innerHTML = orders[i]
        food.className = "wishItems"

        
        main.appendChild(food)
    }
}

function setting()
{
    main.innerHTML=""
    var logout= document.createElement('h3')
    logout.innerHTML = "Are You sure You want to Logout?"

    var divBtn = document.createElement('div')
    divBtn.className = "chooseBtns"
    
    var yes = document.createElement('button')
    yes.innerHTML = "Yes"
    yes.classList="logYes"

    var no = document.createElement('button')
    no.innerHTML = "No"
    no.className="logNo"

    main.appendChild(logout)
    divBtn.appendChild(yes)
    divBtn.appendChild(no)
    main.appendChild(divBtn)
}

function contactUs()
{
    main.innerHTML=""
    var theme = document.createElement('h4')
    theme.innerHTML = "Our Email: AASTUGEBETA@gmail.com"

    main.appendChild(theme)
}

document.addEventListener('click', (e) => {
    if (e.target.classList == "logYes") 
    {
        window.location.href = "../index.html"
        localStorage.clear()
    }

    else if (e.target.classList == "logNo")
    {
        window.location.href = './profile.html'
    }
})