const ringBtnAlls = document.querySelectorAll(".ring-button");
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
        productImage.src = "../img/" + color + ".png"
        
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