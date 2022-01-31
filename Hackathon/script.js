async function call() {
    try {
        let data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        let allData = await data.json();
        console.log(allData);
        allData.forEach(product => {
            let makeup =document.createElement("div");
            makeup.setAttribute("class","container");
            makeup.innerHTML =`
            <h2>${product.brand}</h2>
            <img src=${product.image_link}
            class = "image" />
            <div class="info">
            
            <p><span><b>Name:</b></span>${product.name}</p>
            <p><span><b>Price:</b></span>${product.price}</p>
         <p><span><b>Product_link:</b></span>${product.product_link}</p>
            <p><span><b>Description:</b></span>${product.description}</p>
        
            </div>`

            document.body.appendChild(makeup);
            
        });

    } catch (error) {
        
    }
}call();


 // <button>
            // <a href="https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=0cce614772ff998ddfb7a45f88155367">
            // Click for weather</button></a>