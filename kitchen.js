async function findMeal(){

    let ingredient = document.getElementById("ingredients").value;
    let results = document.getElementById("results");

    results.innerHTML = "Loading...";

    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    let data = await response.json();

    results.innerHTML = "";

    if(!data.meals){
        results.innerHTML = "No meals found";
        return;
    }

    data.meals.slice(0,5).forEach(meal => {

        results.innerHTML += `
<div class="card">
<img src="${meal.strMealThumb}">
<h3>${meal.strMeal}</h3>
<a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">
View Recipe
</a>
</div>
`;

    });

}