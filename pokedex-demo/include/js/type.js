let menuUl = document.querySelector('#liste-types');
types.sort(); 
for (let type of types) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="type.html?id=${type}">${type}</a>`;
    menuUl.appendChild(li);
}
function filtrer_par_type(data, typeDemande) {
    let resultat = [];
    for (let p of data) {
    if (p.type.includes(typeDemande)) {
        resultat.push(p); }
    }
    return resultat;
}
let urlParams = new URLSearchParams(window.location.search);
let idType = urlParams.get('id');
if (idType) {
    document.querySelector("h1").textContent = "Type : " + idType;
    let listeFiltrée = filtrer_par_type(data, idType);
    listeFiltrée.sort((a, b) => a.nom.localeCompare(b.nom));
    let container = document.querySelector('#liste-pokemon');
    container.innerHTML = ""; 
    for (let p of listeFiltrée) {
        let typesHtml = "";
        for (let t of p.type) { 
            typesHtml += `<span class="type-badge ${t}">${t}</span> `; }
        let li = document.createElement("li");
        li.classList.add("card"); 
        li.innerHTML = `
            <a href="pokemon.html?id=${p.nom}">
            <img src="include/img/${p.png}" alt="${p.nom}">
            </a>
            <h2>${p.nom}</h2>
            <div>${typesHtml}</div>
            <a href="pokemon.html?id=${p.nom}" style="font-weight:bold;">Voir la fiche</a>
        `;
        container.appendChild(li);
    }
}