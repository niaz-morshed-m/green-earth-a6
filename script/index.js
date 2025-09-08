
const categoriesLoad = ()=>{
const url = "https://openapi.programming-hero.com/api/categories";

fetch(url)
.then(res=> res.json())
.then(json=> displayCategories(json.categories))
}

const displayCategories = (categories) => {
   const categoriesContainer = document.getElementById("categories-container");
  for(const category of categories){
    const ul = document.createElement('ul')
    ul.innerHTML = `<li><a>${category.category_name}</a></li>`;
    categoriesContainer.appendChild(ul)
  }
};

const loadAllPlants = ()=> {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants)); 

}
const displayAllPlants = (plants)=>{
  const plantsContainer = document.getElementById("plants-container");

  for(const plant of plants){
    const plantCard = document.createElement('div')
    plantCard.innerHTML = `
     <div class="card bg-base-100 p-3 shadow-sm max-h-[450px]">
  <figure class="rounded-md">
    <img src="${plant.image}"
      alt=""/>
  </figure>
  <div class="">
    <p class="font-semibold text-lg mt-4">${plant.name}</p>
    <p class="text-[14px] mt-3">${plant.description}</p>
    <div class="flex justify-between items-center mt-3">
      <div class="rounded-3xl bg-[#DCFCE7] p-2 text-[#15803D]">
        <p class="text-center text-xs font-medium">${plant.category}</p>
      </div>
      <div> <p class="font-bold">৳${plant.price}</p></div>
     
    </div>
    <div class="card-actions justify-center align-bottom mt-3 w-full">
      <button class="btn w-full bg-[#15803D] text-white rounded-[99px]">Add to Cart</button>
    </div>
  </div>
</div>`;
plantsContainer.appendChild(plantCard)
  }
}

categoriesLoad()
loadAllPlants();
