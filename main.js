// Entrega 2

// objeto literal - Todo este esta por console.log

let carros = [{
  marca: "mazda",
  modelo: 2022,
  kilometraje: 20.000
},
{
  marca: "kia",
  modelo: 2016,
  kilometraje: 55.000
},
{
  marca: "volkswagen",
  modelo: 2020,
  kilometraje: 25.000
},
{
  marca: "chevrolet",
  modelo: 2015,
  kilometraje: 75.000
}
]


let carrosConMenorKilometraje = carros.filter((carro) => carro.kilometraje < 30.000)

console.log(carrosConMenorKilometraje)


//funcion constructora

const Carro = function(marca, modelo, kilometraje){
  this.marca = marca
  this.modelo = modelo
  this.kilometraje = kilometraje
}

let carro1 = new Carro("mazda", 2022, 20.000) 
let carro2 = new Carro("kia", 2016, 55.000) 
let carro3 = new Carro("volkswagen", 2020, 25.000) 
let carro4 = new Carro("chevrolet", 2015, 75.000) 
let carro5 = new Carro("mercedes", 2024, 0) 

let listaCarros = [carro1, carro2, carro3, carro4, carro5]

function filtrarCarros(){
  let marcaCarro = prompt("ingresa la marca del carro ").toUpperCase().trim()
  let resultado = listaCarros.filter((carro) => carro.marca.toUpperCase().includes(marcaCarro))

  if(resultado.length > 0){
    alert(JSON.stringify(resultado))
  } else{
    alert(`no tenemos esta marca de carro disponible: ${marcaCarro}`)
  }
}

filtrarCarros()