const presentes = [

"Jogo de panelas (5 peças)",
"Frigideira",
"Panela de pressão",
"Assadeiras",
"Formas para bolo",
"Escorredor de macarrão",
"Escorredor de louça",
"Tábua de corte",
"Peneira",
"Jarra",
"Jogo de pratos",
"Jogo de copos",
"Xícaras",
"Canecas",
"Jogo de talheres",
"Facas de cozinha",
"Conchas",
"Espátulas",
"Colheres de servir",
"Abridor de latas",
"Abridor de garrafas",
"Jogo de cama",
"Lençóis",
"Cobertor",
"Edredom",
"Travesseiros",
"Capas para travesseiros",
"Cabides",
"Toalhas de banho",
"Toalhas de rosto",
"Tapete para banheiro",
"Cesto para roupas",
"Vassoura",
"Rodo",
"Pá",
"Balde",
"Varal",
"Prendedores de roupa",
"Lixeira",
"Organizador de produtos de limpeza",
"Liquidificador",
"Air Fryer",
"Sanduicheira",
"Cafeteira",
"Ferro de passar",
"Ventilador",
"Micro-ondas",
"Potes para mantimentos",
"Potes com tampa",
"Organizadores",
"Cestos",
"Porta-temperos",
"Porta-talheres",
"Porta-sabonete"

];

const lista = document.getElementById("presentes");

presentes.forEach((item)=>{

const card = document.createElement("div");

card.className="card";

card.textContent=item;

card.onclick=()=>{

if(confirm("Deseja escolher este presente?")){

card.remove();

}

};

lista.appendChild(card);

});
