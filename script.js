const shop = ["rascador gris", "rascador rojo", "rascador negro", "rascador beige"];
const precio_x_item = 3000;
let total = 0;

const mi_inventario = [];

function comprar_prompt() {
  const item_a_comprar = prompt("¿Qué color de rascador deseas comprar para tu gato?");
  comprar_item(item_a_comprar);
}

function comprar_item(item) {
  if (shop.includes(item)) {
      const indice = shop.indexOf(item);
      mi_inventario.push(shop[indice]);
      console.log("¡Compraste un " + item + " por $3000!");
      total = total + precio_x_item;
  } else {
    console.error("No tengo nada de '" + item + "' disponible a la venta.");
  }

}

function mostrar_inventario() {
  console.log("Tu inventario:");
  for (let indice = 0; indice < mi_inventario.length; indice++) {
    console.log(mi_inventario[indice]);
  }
  console.log("El total de tu compra es $" + total)
}
