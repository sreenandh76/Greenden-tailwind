// selecting side navbar , MenuIcon
var sidenav = document.getElementById("sidenav")
var MenuIcon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

MenuIcon.addEventListener("click", function(){
    sidenav.style.right = "0"
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

// product search functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(event){

    var enteredValue = event.target.value.toUpperCase()

    for(count = 0; count < productlist.length; count++)
    {
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue) < 0)
        {
            productlist[count].style.display = "none"
        }
        else
        {
            productlist[count].style.display = "block"
        }
    }

})