const overlay = document.querySelector('.overlay')
const filter = document.querySelector('.filterBar').addEventListener('click',()=>
{ 
    document.querySelector('.filterContent').classList.toggle('active')
    overlay.classList.toggle('open')
})

overlay.addEventListener('click',()=>
{
    document.querySelector('.filterContent').classList.remove('active')
    overlay.classList.remove('open')
})





const actualContent = document.querySelector('.actualContent')
const actualContentFood= document.getElementById('actualContentFood')
const contentTitle= document.querySelectorAll('.contentTitle')
const contentsAvailable= document.querySelector('.contentsAvailable')
const actualContentDrink = document.getElementById('actualContentDrink')
const both = document.querySelector('.bothAvail')
const searchResult = document.querySelector('.searchResults')
const found = document.querySelector('.foundContent')




function appendElements(item)
{
    searchResult.style.display = "none"
  
    
    item.forEach(i =>
    {
        
        var borderDiv = document.createElement('div')
        borderDiv.className = "borderOfItem"
    
        var itemMain = document.createElement('div')
        itemMain.className = "item"
      
       
        var itemBorder  = document.createElement('div')
        itemBorder.className = "itemImage"
    
        var itemDescribe = document.createElement('div')
        itemDescribe.className ="itemDescribe"
    
        var imageItem = document.createElement('img')
        imageItem.className= "pictures"
        imageItem.src = i.Image
    
        var p =document.createElement('p')
        p.innerHTML= i.Name
    
        var price = document.createElement('h4')
        price.innerHTML= `${i.Price} Birr`
    
    
        itemDescribe.appendChild(p)
        itemDescribe.appendChild(price)
    
        var plusIcon =document.createElement('i')
        plusIcon.classList.add('fas','fa-plus')
    
        plusIcon.id = i.Name
        plusIcon.title ="Add to Cart"

        var questionIcon = document.createElement('i')
        questionIcon.classList.add('fas', 'fa-question-circle')
        questionIcon.id = i.Name
        questionIcon.title = "Details"
    
        
    
    
        itemBorder.appendChild(imageItem)
        itemMain.appendChild(itemBorder)
        itemMain.appendChild(itemDescribe)
        itemDescribe.appendChild(plusIcon)
        itemDescribe.appendChild(questionIcon)
    
    
    
        borderDiv.appendChild(itemMain)
    

    
        if(i.Catagory == "Food")
        {
            
             actualContentFood.appendChild(borderDiv)
        }
        else if(i.Catagory=="Drink")
        {
           
            actualContentDrink.appendChild(borderDiv)
            
        }
     
        })

   
}


function mainMenu()
{

contentTitle.forEach((contentTitles)=>{

    if(contentTitles.id == "foodTitleId")
    {

        
            fetch("./assets/js/data.json").then(response => response.json()).then(data => {
                newData = data.filter(d => {
                    return (d.Catagory == "Food")
    

                })
                console.log(data)
                console.log(newData)
                appendElements(newData)
            })
        
    
    }

    else if(contentTitles.id =="drinkTitleId")
    {

        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
           
            newData = data.filter(d => {
               return (d.Catagory == "Drink")
                
            })
            console.log(newData)
            appendElements(newData)
        })
    }

})
   

}
mainMenu()

/*search*/

const searchedItem = document.querySelector('input[type=text]')
const bothAvail = document.querySelector('.bothAvail')

searchedItem.addEventListener('input', () =>
{

    if (searchedItem.value.length == 0) {
        bothAvail.style.display = "Block"
        searchResult.style.display = "none"
       
    }
    
    else {
        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
            filteredData = data.filter((d) => {
                return (d.Name.toLocaleLowerCase().replace(/\s+/g, '').indexOf(searchedItem.value.toLowerCase().replace(/\s+/g, '')) != -1)
            })

            console.log(filteredData)

            showResults(filteredData)
        })
    }  
})




const showResults = (fd) => {

    document.querySelector('.error').innerHTML = ""
    
    if (fd.length == 0)
    {
        document.querySelector('.error').innerHTML = "No Results Found! Please Try Again"
        found.innerHTML = ""
        
        
    }

    else
    {
        showElements(fd)
        
        }

}
function showElements(itemNew) {
    
    bothAvail.style.display = "None"
    searchResult.style.display = "Block"
    searchResult.style.minHeight = "500px"

    found.innerHTML = ""
    
    itemNew.forEach(i => {
        var borderDiv = document.createElement('div')
        borderDiv.className = "borderOfItem"
    
        var itemMain = document.createElement('div')
        itemMain.className = "item"
      
       
        var itemBorder = document.createElement('div')
        itemBorder.className = "itemImage"
    
        var itemDescribe = document.createElement('div')
        itemDescribe.className = "itemDescribe"
    
        var imageItem = document.createElement('img')
        imageItem.className = "pictures"
        imageItem.src = i.Image
    
        var p = document.createElement('p')
        p.innerHTML = i.Name
    
        var price = document.createElement('h4')
        price.innerHTML = i.Price
    
    
        itemDescribe.appendChild(p)
        itemDescribe.appendChild(price)
    
        var plusIcon = document.createElement('i')
        plusIcon.classList.add('fas', 'fa-plus')
    
        plusIcon.id = i.Name
        plusIcon.title = "Add to Cart"
        var questionIcon = document.createElement('i')
        questionIcon.classList.add('fas', 'fa-question-circle')
        questionIcon.id = i.Name
        questionIcon.title = "Details"
    
    
    
        itemBorder.appendChild(imageItem)
        itemMain.appendChild(itemBorder)
        itemMain.appendChild(itemDescribe)
        itemDescribe.appendChild(plusIcon)
        itemDescribe.appendChild(questionIcon)
    
    
    
        borderDiv.appendChild(itemMain)
    
           
        found.appendChild(borderDiv)
        searchResult.appendChild(found)

   
    })
}


/*delete*/
const clear = document.querySelector('.clear')

searchedItem.addEventListener('input',()=>{
    if(searchedItem.value!="")
    {
        clear.classList.add('active')
    }

    else{
        clear.classList.remove('active')
    }
})


clear.addEventListener('click', ()=>
{
    console.log('clear')
    searchedItem.value = ""
    searchResult.style.display = "none"
    bothAvail.style.display = "block"
    clear.classList.remove('active')

})


/*filter*/

const lists = document.getElementsByTagName('li')
console.log(lists)

listArray = Array.from(lists)

console.log(listArray)

listArray.forEach(list => {

    list.addEventListener('click', () =>
    {
        console.log(list.id)
            fetch("./assets/js/data.json").then(response => response.json()).then(data => {
        filtered = data.filter(d => {
            return (d.Type == list.id ||d.Lounge == list.id ||d.Price == list.id)      
        })
                console.log(filtered)
                showElements(filtered)
    })
    })

    
})

const mainTitles = document.querySelectorAll('.filterTitle')

mainTitles.forEach(title => {
    title.addEventListener('click', () => {
        fetch("./assets/js/data.json").then(response => response.json()).then(data => {
            newdata = data.filter(d => { return (title.innerHTML == d.Catagory) })

            showElements(newdata)
        })
    })
        })
  


