let ul = document.querySelector('#liste-types');
for (let type of types) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="type.html?id=${type}">${type}</a>`;
    ul.appendChild(li);
}
function get_pokemon(data) {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id'); 
    for (let p of data) {
    if (p.nom === id) {
    return p;}
    }
}
function format_types(listeTypes) {
    let html = "";
    for (let t of listeTypes) {
    html += `<a href="type.html?id=${t}" class="type-badge ${t}">${t}</a> `;
    }
    return html;
}
function format_evolutions(listeEvol) {
    let html = "";
    for (let e of listeEvol) {
    html += `<a href="pokemon.html?id=${e}">➜ ${e}</a> `; }
    return html;
}
let pokemon = get_pokemon(data);
if (pokemon) {
    document.querySelector("h1").textContent = pokemon.nom;
    document.querySelector("#description").textContent = pokemon.description;
    document.querySelector("#taille").textContent = "Taille : " + pokemon.taille;
    document.querySelector("#poids").textContent = "Poids : " + pokemon.poids;
    document.querySelector("#image img").src = "include/img/" + pokemon.png;
    document.querySelector("#types").innerHTML = format_types(pokemon.type);
    document.querySelector("#evolutions").innerHTML = format_evolutions(pokemon.evolutions);
}