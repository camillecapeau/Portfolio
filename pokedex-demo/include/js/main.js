let menuUl = document.querySelector('#liste-types');

types.sort(); 
for (let type of types) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="type.html?id=${type}">${type}</a>`;
    menuUl.appendChild(li);
}
function creerCarte(p) {
    let typesHtml = "";
    for (let t of p.type) { 
        typesHtml += `<span class="type-badge ${t}">${t}</span> `; 
    }
    let li = document.createElement("li");
    li.classList.add("card"); 
 
    li.innerHTML = `
        <a href="pokemon.html?id=${p.nom}">
        <img src="include/img/${p.png}" alt="${p.nom}"></a>
        <h2>${p.nom}</h2>
        <div style="margin-bottom: 10px;">${typesHtml}</div>
        <a href="pokemon.html?id=${p.nom}" style="text-decoration:none; color:#2a75bb; font-weight:bold;">Voir la fiche</a>
    `;
    return li;
}
let container = document.querySelector('#liste-pokemon');
data.sort((a, b) => a.nom.localeCompare(b.nom));
for (let pokemon of data) {
    container.appendChild(creerCarte(pokemon));
}
let search = document.querySelector('#search-bar');
search.addEventListener('input', (e) => {
    let txt = e.target.value.toLowerCase(); 
    container.innerHTML = ""; 

    let trouve = false; 
    for (let p of data) {
        if (p.nom.toLowerCase().includes(txt)) {
            container.appendChild(creerCarte(p)); 
            trouve = true;
        }
     }
    if (trouve === false) {
        let li = document.createElement("li");
        li.textContent = "Aucun Pokémon trouvé."; 
        li.style.marginTop = "20px";
        container.appendChild(li);
    }
});