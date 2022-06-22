const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
console.log(url);

const card = document.querySelector(".cards");
console.log(card);

async function pokemon() {

  try {

    const response = await fetch(url);
    console.log(response);
    const results = await response.json();
    console.log(results);
    const property = results.data;
    console.log(property);

    for (let i = 0; i < property.length; i++) {
      console.log(property[i].ID);

      card.innerHTML += ` <div class="card">
                          <h1> Population: ${property[i].Population} </h2>
                            <div class="nation">
                              <p class="nation"> Year: ${property[i].Year}</p>
                              <p class="nation"> Nation: ${property[i].Nation}</p>
                            </div>
                              <p class="nation"> ID Nation: ${property[i]["ID Nation"]}</p>
                            <div class="nation">
                              <h4> Slug Nation: ${property[i]["Slug Nation"]}</h4>
                            </div>
                         </div>`;
                     
      
    }
 
  } catch (error) {
    console.log("an error found ");
  }
  
}

pokemon()