const userDesk = document.getElementById('userDesk')
const signPassCheck = document.getElementById('signPassCheck')
const signPass = document.querySelector('#signPass')
const signEmail = document.querySelector('#signEmail')


const loginDesktop = document.getElementById('loginDesktop')
const signDesktop = document.getElementById('signDesktop')


const emailLog = document.querySelector('#emailLog')
const passLog = document.querySelector('#passLog')


userDesk.addEventListener('input', () => {
        localStorage.setItem("userName", userDesk.value)
    })

signPass.addEventListener('input', () => {
        
        if (signPass.value.length < 7)
        {
            document.querySelector('.signWeak').innerHTML="*PassWord Must Be greater than 7 characters"
            document.querySelector('.signWeak').classList.add('show')
    }
        else {
            document.querySelector('.signWeak').classList.remove('show')       
            localStorage.setItem("Password", signPass.value)
    }
       
    })

    signPassCheck.addEventListener('input', () => {
        if(localStorage.getItem("Password") != signPassCheck.value)
        {
            err = document.querySelector('.error')
            err.innerHTML = "*The Password doesn't match"
            err.classList.add('show')
        }
        else err.classList.remove('show')
    })

    signEmail.addEventListener('input', () => {
    
        if (localStorage.getItem("Email") == signEmail.value)
        {
            document.querySelector(".sameEmail").innerHTML = "*This Email is Already Registered"
            document.querySelector(".sameEmail").classList.add('show')

        }
        else if(localStorage.getItem("Email")!=signEmail.value)
        {
            document.querySelector('.sameEmail').classList.remove('show')
            localStorage.setItem("Email", signEmail.value)

            }
        
    })


error = document.querySelector('.logErrorPass')
errE = document.querySelector('.logErrorEmail')

loginDesktop.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    if (emailLog.value == "" && passLog.value == "")
    {

        error.innerHTML = "*Please Enter Password"
        errE.innerHTML="*Please Enter Email"
        error.classList.add('show')
        errE.classList.add('show')
    }
    

   else if (emailLog.value == localStorage.getItem("Email") && passLog.value == localStorage.getItem("Password"))
    {
        error.classList.remove('show')
        errE.classList.remove('show')
        window.location.href = './profile.html'
        
    }
    
    else if (emailLog.value != localStorage.getItem("Email") || passLog.value != localStorage.getItem("Password"))
    {
        error.innerHTML ="*incorrect Email or Password"
        error.classList.add('show')
        }

	
})
