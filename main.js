alert("Bienvenidos a la Calculadora de Valores de Productos");

const getSystem = () => {
  while (true) {
    let optionSelected = prompt(
      `Por favor seleccione una opción: 
    1- Ingreso Ventas
    2- Ingreso Cliente 
    3- Salir del Sistema`
    );

    switch (parseInt(optionSelected)) {
      case 1:
        alert("Usted ha ingresado al Sistema de Ventas");
        getSistemaVentas();
        break;
      case 2:
        alert("Usted ha ingresado al Sistema de Clientes");
        getSistemaCompras();
        break;
      case 3:
        alert("Gracias, vuelva pronto!");
        break;
      default:
        alert("Usted ha ingresado una opción incorrecta. Intente nuevamente.");
    }

    if (optionSelected == 3) {
      break;
    }
  }
};

const getSistemaVentas = () => {
  while (true) {
    let optionSelected = prompt(
      `Por favor seleccione una opción: 
    1- Agregar Productos
    2- Eliminar Productos
    3- Listar Productos
    4- Salir`
    );

    switch (parseInt(optionSelected)) {
      case 1:
        agregarProductos();
        break;
      case 2:
        eliminarProductos();
        break;
      case 3:
        alert("Revise el Listado de Productos");
        listarProductos();
        break;
      case 4:
        break;
      default:
        alert("Usted ha ingresado una opción incorrecta. Intente nuevamente.");
    }

    if (optionSelected == 4) {
      break;
    }
  }
};

const agregarProductos = () => {
  let nombre = prompt("Ingrese el Nombre del Producto");
  let precio = parseInt(prompt("Ingrese el Precio del Producto"));
  const newProducto = new Producto(nombre, precio);
  arrayProductos.push(newProducto);
};

const eliminarProductos = () => {
  let producto = prompt("Escriba el Nombre del Producto a eliminar");
  const indx = arrayProductos.findIndex((p) => p.nombre == producto);
  arrayProductos.splice(indx, 1);
};

const listarProductos = () => {
  let listadoProductos = "";

  arrayProductos.forEach((producto) => {
    listadoProductos += producto.nombre + " $" + producto.precio + "\n";
  });

  alert(listadoProductos);
};

const getSistemaCompras = () => {
  while (true) {
    let optionSelected = prompt(
      `Por favor seleccione una opción: 
      1- Revisar Productos
      2- Añadir Productos
      3- Revisar Carrito de Compras
      4- Eliminar Productos del Carrito de Compras
      5- Revisar Total de Compra
      6- Salir`
    );

    switch (parseInt(optionSelected)) {
      case 1:
        alert("Revise el Listado de Productos disponibles");
        revisarProductos();
        break;
      case 2:
        alert("Ingrese los Productos a Comprar");
        ingresarProductos();
        break;
      case 3:
        alert("Revise su Carrito de Compras");
        revisarCarrito();
        break;
      case 4:
        alert("Seleccione el o los Productos para Eliminar");
        borrarProductos();
        break;
      case 5:
        alert("Revise el Total de su Compra");
        calcularTotal();
        break;
      case 6:
        break;
      default:
        alert("Usted ha ingresado una opción incorrecta. Intente nuevamente.");
    }

    if (optionSelected == 6) {
      break;
    }
  }
};

const arrayListadoNuevoCliente = [];

const revisarProductos = () => {
  let stockProductos = "";
  arrayProductos.forEach((producto) => {
    stockProductos += producto.nombre + " $" + producto.precio + "\n";
  });

  alert(stockProductos);
};

const ingresarProductos = () => {
  let productoComprado = prompt("Escriba el nombre del Producto a añadir");
  const indx = arrayProductos.findIndex((p) => p.nombre == productoComprado);

  console.log(indx);

  if (indx == -1) {
    alert(
      "El producto no se encuentra en stock. Ingrese otro producto, por favor."
    );
  } else {
    arrayListadoNuevoCliente.push(arrayProductos[indx]);
    alert("Producto agregado exitosamente");
  }
};

const revisarCarrito = () => {
  let stockCarrito = "";
  arrayListadoNuevoCliente.forEach((producto) => {
    stockCarrito += producto.nombre + " $" + producto.precio + "\n";
  });

  alert(stockCarrito);
};

const borrarProductos = () => {
  let producto = prompt("Escriba el nombre del producto a eliminar");
  const index = arrayListadoNuevoCliente.findIndex((p) => p.nombre == producto);
  arrayListadoNuevoCliente.splice(index, 1);
  alert("Producto eliminado exitosamente");

  if (index == -1) {
    alert(
      "El producto no se encuentra registrado en el Carrito de Compras. Intente nuevamente."
    );
  }
};

const calcularTotal = () => {
  let total = 0;
  arrayListadoNuevoCliente.forEach((listadoCliente) => {
    total += listadoCliente.precio;
  });

  alert("El Total es $" + total);
  console.log("El Total es: ");
  console.log("$", total);
};

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const pan = new Producto("Pan", 2300);
const jamon = new Producto("Jamon", 2750);
const queso = new Producto("Queso", 2500);
const mantequilla = new Producto("Mantequilla", 3500);
const manjar = new Producto("Manjar", 2500);

const arrayProductos = [pan, jamon, queso, mantequilla, manjar];

const usuarioValido = "Diego";
const passwordValido = "asdf1234";

let usuario = prompt("Ingrese su Nombre de Usuario: ");
let password = prompt("Ingrese su Contraseña: ");

if (usuario === usuarioValido && password === passwordValido) {
  alert(
    "Bienvenido a la Plataforma " + usuario + ". Gracias por validar sus datos."
  );
  getSystem();
} else {
  alert(
    "Nombre de Usuario o Contraseña Incorrectos. Por favor, intente nuevamente."
  );
}
