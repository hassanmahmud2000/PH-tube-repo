const heandleCatagory = async  () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json ();
    // const categoriesData = data.data;
    // console.log(categoriesData);
    // Open Tab
    const tabContainer = document.getElementById ('tab-container')
    data?.data.forEach(categories => {
        const div = document.createElement ('div');
        div.innerHTML = `<a onclick="cardHeandle(' ${categories.category_id}')" class="tab text-gray-600 hover:bg-red-600 hover:text-white"> ${categories.category}</a>`
        tabContainer.appendChild (div)
    });
}


const cardHeandle = async (categoryId) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    console.log(categoryId);
    const data = await res.json ();
    data?.data.forEach(card  => {
        const cardContainer = document.getElementById ('card-container')
        const div = document.createElement ('div');
        div.classList = `card w-72 bg-base-100 shadow-xl ml-3`
        div.innerHTML = `
        <figure><img src="${card.thumbnail}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${card.title}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div> 
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>`
        cardContainer.appendChild (div)
        
    })

}
heandleCatagory ();
cardHeandle();