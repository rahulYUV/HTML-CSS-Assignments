

const generateBtn = document.getElementById("generateBtn");


const cardCountInput = document.getElementById("cardCount");

const categorySelect = document.getElementById("pokemonCategory");

const displayArea = document.getElementById('displayArea');


generateBtn.addEventListener('click',()=>{
    displayArea.innerHTML='';

    const count = cardCountInput.value;
    const category = categorySelect.value;
console.log("Button clicked!");
    console.log("Count:", count);
    console.log("Category:", category);

})


//fetch the data 

// fetch the data 
//creat html 

// loop do this as am time as the user requested


// the fetch funcation 

async function getPokemonData(id) {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);

    const data = await response.json();

    return data
}


// the render function 

function createCard(pokemon){

    const card = document.createElement('div')

    card.classList.add('card');


const name = pokemon.name;
   
    const imageSrc = pokemon.sprites.front_default; 
  
    const type = pokemon.types[0].type.name; 

 
    card.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h3>${name}</h3>
        <span class="type-badge">${type}</span>
    `;

    displayArea.appendChild(card)
}

generateBtn.addEventListener('click', async () => {
    

    displayArea.innerHTML = '';
    
 
    const count = cardCountInput.value;
    const category = categorySelect.value;

  
    for (let i = 0; i < count; i++) {
        
       
        const randomId = Math.floor(Math.random() * 150) + 1;

        try {
           
            const pokemonData = await getPokemonData(randomId);
            
         
            createCard(pokemonData);
            
        } catch (error) {
            console.error("Error fetching pokemon:", error);
        }
    }
});