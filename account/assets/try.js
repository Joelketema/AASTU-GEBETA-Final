var btn = document.getElementById('use');
var input = document.getElementById('user');

btn.addEventListener('click', ()=>{

    if( input.placeholder == "Email" && btn.innerHTML == "Use Phone Number")
    {
        input.placeholder ="Phone Number";
        btn.innerHTML = "Use Email";
    }

    else
    {
        input.placeholder = "Email";
        btn.innerHTML = "Use Phone Number";
    }
  

});

