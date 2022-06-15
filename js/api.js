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

      card.innerHTML += `  
                        <p class="card"> Population: ${property[i].Population}</p>
                         <p> Year: ${property[i].Year}</p>
                         
                          
                          `
      
    }
 
  } catch (error) {
    console.log("an error found ");
  }
  
}

pokemon()