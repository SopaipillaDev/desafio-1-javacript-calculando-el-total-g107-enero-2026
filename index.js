// Definición y asignación de variables.
let precio = 400000
let cantidad = 0
let valorTotal = 0

precioSpan = document.querySelector(".precio-inicial");

cantidadProductos = document.querySelector(".cantidad")

cantidadProductos.innerHTML = cantidad

precioSpan.innerHTML = precio

valorTotalCantidadPrecio = document.querySelector(".valor-total")

valorTotalCantidadPrecio.innerHTML = valorTotal





function aumentarCantidad()
{
	cantidad += 1;
	console.log("La cantidad, luego de aumentar la unidad en 1, es ahora " + cantidad);
	cantidadProductos.innerHTML = cantidad
	actualizarValorTotal();
};

function disminuirCantidad()
{
	cantidad -= 1
	console.log("La cantidad, luego de disminuir la unidad en 1, es ahora " + cantidad);
	cantidadProductos.innerHTML = cantidad
	actualizarValorTotal()
};

function actualizarValorTotal()
{
	valorTotal = precio * cantidad
	console.log("El valor total de la compra será de " + valorTotal);
	valorTotalCantidadPrecio.innerHTML = valorTotal
};