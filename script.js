const ringBtnAlls = document.querySelectorAll(".ring-button");

let productImageBase = "../img/";

for(let i = 0; i< ringBtnAlls.length; i++){
    const ringBtn = ringBtnAlls[i];
    ringBtn.addEventListener("click", function(event){

        const color = event.target.id.replace("-color", "");
        event.preventDefault()

        for(let j = 0; j < ringBtnAlls.length; j++){
            ringBtnAlls[j].classList.remove("border-purple-600");
            ringBtnAlls[j].classList.add("border-gray-300");
        }
        event.target.classList.add("wristSize");
        event.target.classList.remove("border-gray-300");
        event.target.classList.add("border-purple-600")

        const productImage = document.getElementById("product-image");
        // productImage.src = "../img/purple.png"
        productImage.src = productImageBase + color + ".png"
        
    });
}

function selectWristSize(size){
    const sizes= ["S", "M", "L", "XL"]
    for(let i = 0; i < sizes.length; i++){
        const button = document.getElementById("Size-" + sizes[i]);
       const element = sizes[i];
        if(size === element){
            button.classList.add("border-purple-600")
        }
        else{
            button.classList.remove("border-purple-600")
        }
    }
}


//Quantity & Add to Cart

// এখানে একি কাজ দুইবার করা হয়েছে
// Option - 1 ==> এটা ভিডিওতে দেখাইছে
// const quantityButton = document.querySelectorAll(".quantity-button");
// for(let btn of quantityButton){
//     btn.addEventListener("click", function(event){
//         event.preventDefault();
//         const amount = event.target.innerText === "+" ? 1 : -1;
       
//         const quantityElement = document.getElementById("quantity");
//         const currentQuantity = parseInt(quantityElement.innerText);
        
//         const newQuantity = Math.max(0, currentQuantity + amount);
//         quantityElement.innerText = newQuantity;
//     })
// }

// Option - 2 ==> এটা আমি নিজে করেছি বুঝে বুঝে...দুইটার কাজ এক-ই


const quantityButton = document.querySelectorAll(".quantity-button");
for(let i = 0; i<quantityButton.length; i++){
    const quantityButtonAll = quantityButton[i];
    
    quantityButtonAll.addEventListener("click", function(event){

        const quantityAdd = event.target.innerText === "+" ? 1 : -1;
        
        const quantityElement = document.getElementById("quantity");
        const currentQuantity = parseInt(quantityElement.innerText);

        const newQuantity = Math.max(0, currentQuantity + quantityAdd);
        quantityElement.innerText = newQuantity;
    })
}

//add to card 
let cartCount = 0;

let cartItems = [];

document.getElementById("add-to-cart").addEventListener("click", function(){
   

    const quantity = parseInt(document.getElementById("quantity").innerText);

    if(quantity > 0){
         const checkoutContainer = document.getElementById("checkout-container");
        checkoutContainer.classList.remove("hidden")

        cartCount = cartCount + quantity
        document.getElementById("cart-count").innerText = cartCount;

        const selectedColorButton = document.querySelector("button.border-purple-600.w-6")
        
        const selectedColor = selectedColorButton.id.split("-")[0];
        
        const selectSizeButton = document.querySelector("button.border-purple-600:not(.w-6)")
        
        const selectedSize = selectSizeButton.innerText.split(" ")[0];
        
        const selectedPrice = selectSizeButton.innerText.split(" ")[1].split("$")[1];
        
        
        cartItems.push({
            image : selectedColor + ".png",
            title : "Classy Modern Smart Watch",
            color : selectedColor ,
            size : selectedSize ,
            quantity : quantity,
            price : quantity * parseInt(selectedPrice)
        })
        

    } else{
        alert("please select a quantity.....")
    }

})

document.getElementById("checkout-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("cart-modal").classList.remove("hidden");

    const cardContainer = document.getElementById("cart-items")
    for(let i = 0 ; i < cartItems.length ; i++){

        const item = cartItems[i];

        const row = document.createElement("tr");
        row.classList.add("border-b");
        
        row.innerHTML = `
        <td class = "py-2">
            <div class="flex items-center space-x-2">
                <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
                <span class= "font-semibold">${item.title}</span>
            </div>
        </td>
        <td class = "py-2 px-2">${item.color}</td>
        <td class = "py-2 px-2">${item.size}</td>
        <td class = "py-2 px-2">${item.quantity}</td>
        <td class = "py-2 px-2">${item.price}</td>
        `;
        cardContainer.appendChild(row);
    }
})

document.getElementById("continue-shopping").addEventListener("click", function(){
    document.getElementById("cart-modal").classList.add("hidden")
})


if(i = 0){
    document.getElementById("checkout").addEventListener("click", function(){
        
    })
    console.log(checkout)
}