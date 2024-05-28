
const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
    fetchData();
})
    
const fetchData = async () => {
  
    try{
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`);

        if(!response.ok){
            throw new Error(`no pokemon`)
        }
        const screen = document.getElementById('screen');
        screen.innerHTML = '';
        const data = await response.json();
        console.log(data)
        const name = data.name;
        const id = data.id;
        const weight = data.weight;
        const height = data.height;
        const pokemonSprite = data.sprites.front_default;
        const typeOne = data.types[0].type.name;
        const typeTwo = data.types[1]? data.types[1].type.name : ''; 
        const healthPoint = data.stats[0].base_stat;
        const att = data.stats[1].base_stat;
        const def = data.stats[2].base_stat;
        const sAtt = data.stats[3].base_stat;
        const sDef = data.stats[4].base_stat;
        const spd = data.stats[5].base_stat;

        screen.innerHTML += `
                            <p class="name-id">${name} #${id}</p>
                            <p class="weight-height">Weight: ${weight} Height: ${height}</p>
                            `
                           
                            const pokemonImg = document.createElement('img');
                            pokemonImg.id = 'pokemonImg';
                            pokemonImg.src = pokemonSprite;
                            const types = document.createElement(`p`);
                            types.textContent = `${typeOne} ${typeTwo}`
                            screen.appendChild(pokemonImg);  
                            screen.appendChild(types);  
        const hp = document.getElementById(`hp`);
        const attack = document.getElementById(`attack`);
        const defense = document.getElementById(`defense`);
        const spAttack = document.getElementById(`spAttack`);
        const spDefense = document.getElementById(`spDefense`);
        const speed = document.getElementById(`speed`);
        hp.textContent = `${healthPoint}`
        attack.textContent = `${att}`
        defense.textContent = `${def}`
        spAttack.textContent = `${sAtt}`
        spDefense.textContent = `${sDef}`
        speed.textContent = `${spd}`

    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}


