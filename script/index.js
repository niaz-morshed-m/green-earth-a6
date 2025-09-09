
const categoriesLoad = ()=>{
  spinner(true)
const url = "https://openapi.programming-hero.com/api/categories";

fetch(url)
.then(res=> res.json())
.then(json=> displayCategories(json.categories))
}

const removeActive = () => {
  const catBtn = document.querySelectorAll(".cat-btn");

  for(const btn of catBtn){
    btn.classList.remove('active1')
  }
  
};

const spinner = (status)=>{
  const spinner = document.getElementById("spinner");
  const mainContainer = document.getElementById("main-container");
  if(status==true){
spinner.classList.remove('hidden')
mainContainer.classList.add('hidden')
  }
  else{
    spinner.classList.add('hidden')
    mainContainer.classList.remove('hidden')
  }
}

const displayCategories = (categories) => {
   const categoriesContainer = document.getElementById("categories-container");
  for(const category of categories){
    const ul = document.createElement('ul')
    ul.innerHTML = `<li id="cat-btn-${category.id}" onclick="loadByCategory(${category.id})" class="cat-btn"><a>${category.category_name}</a></li>`;
    categoriesContainer.appendChild(ul)
    spinner(false)
  }
};

const loadAllPlants = ()=> {
  spinner(true)
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) =>{ 
      displayAllPlants(data.plants)

    }); 

}
let i = 1;
const cart = (name, price) => {
 
 
const  priceInt = parseInt(price)
let currentPrice = priceInt
const cartParent = document.getElementById("cart-parent");
const cartTray = document.createElement('div')
cartTray.innerHTML = `
 <div><p class="font-semibold text-[12px]">${name}</p>
  <p class="text-[#1F2937] text-[12px]">৳${price}</p></div>
  
  <div onclick="clear()" id="clear-${i}" class="cursor-pointer">
    <i class="fa-solid fa-xmark"></i>
  </div>
`;



cartTray.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'bg-[#F0FDF4]', 'rounded','mb-3')
cartParent.appendChild(cartTray)

const totalParent = document.getElementById('total')
let currentTotal = parseInt(totalParent.innerText)
let total = currentTotal + priceInt;

totalParent.innerText = total
 alert("Your item added to the cart");
document.getElementById(`clear-${i}`).addEventListener("click", function () {
  cartTray.innerHTML=""
  cartTray.classList.remove('flex', 'justify-between', 'items-center', 'p-2', 'bg-[#F0FDF4]', 'rounded','mb-3')
  const totalParent = document.getElementById("total");
  let currentTotal = parseInt(totalParent.innerText);
  let total = currentTotal - priceInt;

  totalParent.innerText = total;
});

i++


};
const displayAllPlants = (plants) => {
  const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  for (const plant of plants) {
    const plantCard = document.createElement("div");
    plantCard.innerHTML = `
     <div class="card bg-base-100 p-3 shadow-sm max-h-[450px]">
  <figure class="rounded-md">
    <img src="${plant.image}"
      alt=""/>
  </figure>
  <div class="">
    <p onclick="loadDetails(${plant.id})" class="cursor-pointer font-semibold text-lg mt-4">${plant.name}</p>
    <p class="text-[14px] mt-3">${plant.description}</p>
    <div class="flex justify-between items-center mt-3">
      <div class="rounded-3xl bg-[#DCFCE7] p-2 text-[#15803D]">
        <p class="text-center text-xs font-medium">${plant.category}</p>
      </div>
      <div> <p class="font-bold">৳${plant.price}</p></div>
     
    </div>
    <div class="card-actions justify-center align-bottom mt-3 w-full">
      <button onclick="cart('${plant.name}', '${plant.price}')" class="btn w-full bg-[#15803D] text-white rounded-[99px]">Add to Cart</button>
    </div>
  </div>
</div>`;
    plantsContainer.appendChild(plantCard);
    spinner(false);
  }
};

document.getElementById('all-cat').addEventListener('click',function(){
  loadAllPlants()
  removeActive();
  const catBtn = document.getElementById('all-cat');
  catBtn.classList.add("active1");
  
  
})
const loadByCategory = (id)=>{
  spinner(true)
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    
    .then((data) => {
       removeActive();
      displayAllPlants(data.plants)
    const catBtn = document.getElementById(`cat-btn-${id}`)
    catBtn.classList.add("active1") 
    spinner(false)
    });
}
const detailParent = document.getElementById("detail-parent");
const loadDetails = (plantId)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${plantId}`;
fetch(url)
  .then(res=> res.json())
  .then(data=> {
my_modal_5.showModal();
detailParent.innerHTML = `
<p class="font-semibold text-lg mb-2">${data.plants.name}</p>

     <figure class="rounded-md  mb-4 overflow-hidden">
    <img class="min-50 w-full" src="${data.plants.image}"
      alt=""/>
  </figure>
  <div class="space-y-2">
   <p class=""><span class="font-bold">Category: </span>${data.plants.category}</p>
    <p class="mt-3"><span class="font-bold">Description:</span> ${data.plants.description}</p>
    
     
        
       <p class=><span class="font-bold">Price: </span>৳${data.plants.price}</p>
        <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  `;

  })
}




categoriesLoad()
loadAllPlants();
